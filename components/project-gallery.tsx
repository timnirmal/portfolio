"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  X,
  ImageOff,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projectDetails } from "@/lib/project-details";

const summaries = [
  "A collaborative workspace connecting documents, media, and multiple language models.",
  "An AI artwork generation project exploring generative creativity.",
  "A work-in-progress healthcare platform connecting patient records, appointments, and care tools.",
  "Deep learning for detecting and classifying brain tumors from medical images.",
  "Hate speech and sentiment analysis across text, audio, and video.",
  "Predicting eCommerce satisfaction through feature engineering and sentiment analysis.",
  "Supervised and unsupervised learning for network traffic anomaly detection.",
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="project-image-fallback">
      <ImageOff size={28} />
      <span>Preview unavailable</span>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 760px) 90vw, 600px"
      className="project-screenshot"
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const project = selected === null ? null : projectDetails[selected];
  const track = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{
    id: number;
    x: number;
    scroll: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);
  const resumeAt = useRef(0);
  const [position, setPosition] = useState({
    first: 1,
    start: true,
    end: false,
  });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const card = element.firstElementChild as HTMLElement | null;
      const step =
        (card?.offsetWidth || 1) +
        parseFloat(getComputedStyle(element).columnGap || "0");
      setPosition({
        first: Math.min(
          projectDetails.length,
          Math.round(element.scrollLeft / step) + 1,
        ),
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      });
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    if (track.current) observer.observe(track.current);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      !playing ||
      reducedMotion ||
      hovered ||
      focused ||
      dragging ||
      !visible ||
      selected !== null
    )
      return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element || document.hidden || Date.now() < resumeAt.current) return;
      const card = element.firstElementChild as HTMLElement | null;
      const step =
        (card?.offsetWidth || element.clientWidth) +
        parseFloat(getComputedStyle(element).columnGap || "0");
      const atEnd =
        element.scrollLeft + element.clientWidth >= element.scrollWidth - 2;
      element.scrollTo({
        left: atEnd ? 0 : element.scrollLeft + step,
        behavior: "smooth",
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion, hovered, focused, dragging, visible, selected]);

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current || drag.current.id !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    resumeAt.current = Date.now() + 4500;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function move(direction: number) {
    resumeAt.current = Date.now() + 4500;
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const step =
      (card?.offsetWidth || element.clientWidth) +
      parseFloat(getComputedStyle(element).columnGap || "0");
    element.scrollBy({
      left: step * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  useEffect(() => {
    if (selected === null) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal?.showModal();
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  return (
    <>
      <div
        className="project-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null))
            setFocused(false);
        }}
      >
        <div className="project-carousel-controls">
          <p>
            Browse {projectDetails.length} projects{" "}
            <span>· Drag, swipe, or use the arrows</span>
          </p>
          <div>
            <span
              className="project-position"
              aria-live={
                playing && !reducedMotion && !hovered && !focused
                  ? "off"
                  : "polite"
              }
            >
              {position.first} / {projectDetails.length}
            </span>
            {!reducedMotion && (
              <button
                aria-label={
                  playing ? "Pause project slideshow" : "Play project slideshow"
                }
                onClick={() => setPlaying((value) => !value)}
              >
                {playing ? <Pause size={17} /> : <Play size={17} />}
              </button>
            )}
            <button
              aria-label="Previous projects"
              aria-controls="project-track"
              disabled={position.start}
              onClick={() => move(-1)}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              aria-label="Next projects"
              aria-controls="project-track"
              disabled={position.end}
              onClick={() => move(1)}
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
        <div
          ref={track}
          id="project-track"
          className={dragging ? "project-track is-dragging" : "project-track"}
          onDragStart={(event) => event.preventDefault()}
          onPointerDown={(event) => {
            suppressClick.current = false;
            resumeAt.current = Date.now() + 4500;
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            drag.current = {
              id: event.pointerId,
              x: event.clientX,
              scroll: event.currentTarget.scrollLeft,
              moved: false,
            };
          }}
          onPointerMove={(event) => {
            const state = drag.current;
            if (!state || state.id !== event.pointerId) return;
            // A release outside the track must not turn a later hover into a drag.
            if (event.buttons !== 1) {
              endDrag(event);
              return;
            }
            const delta = event.clientX - state.x;
            if (!state.moved && Math.abs(delta) < 10) return;
            state.moved = true;
            suppressClick.current = true;
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.scrollLeft = state.scroll - delta;
            event.preventDefault();
          }}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          onPointerLeave={(event) => {
            if (drag.current && !drag.current.moved) endDrag(event);
          }}
          onClickCapture={(event) => {
            if (suppressClick.current && event.detail > 0) {
              event.preventDefault();
              event.stopPropagation();
              suppressClick.current = false;
            }
          }}
          onWheel={() => {
            resumeAt.current = Date.now() + 4500;
          }}
          role="region"
          aria-label="Projects carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              move(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          {projectDetails.map((item, index) => {
            const categories =
              item.categories ||
              (Array.isArray(item.category) ? item.category : [item.category]);
            return (
              <article className="project-card" key={item.title}>
                <div className="project-cover">
                  <ProjectImage src={item.src} alt={`${item.title} preview`} />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{summaries[index]}</p>
                  <button
                    className="project-open"
                    aria-haspopup="dialog"
                    aria-label={`View ${item.title} details`}
                    onClick={(event) => {
                      trigger.current = event.currentTarget;
                      setImageIndex(0);
                      setSelected(index);
                    }}
                  >
                    View project <ArrowUpRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              setSelected(null);
          }
        }}
      >
        {project && (
          <>
            <header className="dialog-header">
              <div>
                <p className="eyebrow">PROJECT DETAILS</p>
                <h2 id="project-dialog-title">{project.title}</h2>
              </div>
              <button
                className="dialog-close"
                aria-label="Close project details"
                onClick={() => setSelected(null)}
                autoFocus
              >
                <X size={23} />
              </button>
            </header>
            <div className="dialog-body">
              <div className="dialog-image">
                <ProjectImage
                  key={project.images[imageIndex]}
                  src={project.images[imageIndex] || project.src}
                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                />
              </div>
              {project.images.length > 1 && (
                <div
                  className="image-picker"
                  role="group"
                  aria-label="Project screenshots"
                >
                  {project.images.map((src, index) => (
                    <button
                      key={src}
                      aria-pressed={imageIndex === index}
                      onClick={() => setImageIndex(index)}
                    >
                      Screenshot {index + 1}
                    </button>
                  ))}
                </div>
              )}
              {project.links && project.links.length > 0 && (
                <div className="project-source-links">
                  {project.links.map((link) => (
                    <a
                      className="text-link"
                      href={link}
                      key={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.includes("github.com")
                        ? "View source on GitHub"
                        : "Visit project"}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              )}
              <div className="project-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.description}
                </ReactMarkdown>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
