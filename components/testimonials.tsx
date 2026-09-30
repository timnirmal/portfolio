import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section
      className="testimonials-section wrap"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / TESTIMONIALS</p>
          <h2 id="testimonials-title">From the people I’ve worked with.</h2>
        </div>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((person) => (
          <figure className="testimonial-card" key={person.name}>
            <figcaption>
              <span className="quote-avatar">
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div>
                <h3>
                  {person.url ? (
                    <a
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {person.name}
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    person.name
                  )}
                </h3>
                <p>{person.title}</p>
                <p className="testimonial-context">
                  {person.date && (
                    <>
                      <time dateTime={person.dateTime}>{person.date}</time>{" "}
                      ·{" "}
                    </>
                  )}
                  {person.relationship}
                </p>
              </div>
            </figcaption>
            <blockquote>
              {person.quote.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
