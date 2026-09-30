import { ProjectGallery } from "@/components/project-gallery";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2 } from "lucide-react";
import { skillGroups, profile } from "@/lib/portfolio";
import { Navigation } from "@/components/portfolio-navigation";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero wrap" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AI ENGINEER / MACHINE LEARNING /
              APPLIED AI
            </p>
            <h1 id="intro-title">
              Turning complex
              <br />
              ideas into
              <br />
              <span>useful intelligence.</span>
            </h1>
            <p className="hero-intro">
              Hi, I’m <strong>Thimira Nirmal.</strong> I build AI systems and
              thoughtful digital experiences, connecting machine learning with
              real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                Let’s talk <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="hero-socials">
              <a href={profile.github}>
                <Github size={17} /> GitHub
              </a>
              <a href={profile.linkedin}>
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={profile.resume}>
                Résumé <ArrowUpRight size={15} />
              </a>
              <a href={profile.medium}>
                Writing <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="portrait-composition">
            <div className="portrait-topline">
              <span>THIMIRA NIRMAL</span>
              <span>AI ENGINEER</span>
            </div>
            <div className="portrait-frame">
              <div className="portrait-grid" />
              <Image
                src="/me1.png"
                alt="Thimira Nirmal"
                width={650}
                height={740}
                priority
                sizes="(max-width: 760px) 90vw, 42vw"
                className="portrait"
              />
              <span className="portrait-star" aria-hidden="true">
                ✳
              </span>
              <div className="portrait-caption">
                <span>AI agents · Language models · Machine learning</span>
                <Code2 size={19} />
              </div>
            </div>
          </div>
        </section>
        <div className="discipline-strip">
          <div className="wrap">
            <span>ARTIFICIAL INTELLIGENCE</span>
            <span aria-hidden="true">✳</span>
            <span>MACHINE LEARNING</span>
            <span aria-hidden="true">✳</span>
            <span>FULL STACK DEVELOPMENT</span>
            <span aria-hidden="true">✳</span>
            <span>CREATIVE PROBLEM SOLVING</span>
          </div>
        </div>
        <section
          id="work"
          className="section wrap"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">Ideas, made tangible.</h2>
            </div>
            <p>
              A selection of projects across language,
              <br className="desktop-break" /> multimodal AI, and data-driven
              applications.
            </p>
          </div>
          <ProjectGallery />
          <a href={profile.github} className="all-work">
            More experiments on GitHub <ArrowUpRight size={18} />
          </a>
        </section>
        <section id="about" className="about-section">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">02 / A BIT ABOUT ME</p>
              <h2>
                Curious by nature.
                <br />
                Engineer by training.
                <br />
                <span>Builder at heart.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m Thimira, an AI engineer and computer engineering graduate
                from the University of Sri Jayewardenepura.
              </p>
              <p>
                My work brings together machine learning, language models, and
                full stack development. I enjoy taking a problem from an early
                experiment to an application people can interact with.
              </p>
              <p>
                Through freelance projects and machine learning work at LSEG,
                I’ve learned to start with the problem, stay curious, and make
                complex ideas easier to use.
              </p>
              <a className="text-link" href={profile.linkedin}>
                More about my background <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section
          id="expertise"
          className="section wrap"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / MY TOOLKIT</p>
              <h2 id="expertise-title">
                Across the stack.
                <br />
                Focused on the problem.
              </h2>
            </div>
            <p>
              The tools change. The drive to build
              <br className="desktop-break" /> something useful stays the same.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p className="skill-experience">{group.experience}</p>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <Testimonials />
        <section id="contact" className="contact-section">
          <div className="wrap">
            <p className="eyebrow">05 / LET’S CONNECT</p>
            <div className="contact-row">
              <h2>
                Have an interesting
                <br />
                problem in mind?
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="contact-arrow"
                aria-label="Email Thimira"
              >
                <ArrowUpRight />
              </a>
            </div>
            <div className="contact-bottom">
              <p>I’d love to hear what you’re working on.</p>
              <a href={`mailto:${profile.email}`}>
                {profile.email} <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="wordmark" href="#main">
          thimira<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Thimira Nirmal</span>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
