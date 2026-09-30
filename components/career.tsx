const experience = [
  {
    company: "AgentRuntime Labs",
    role: "Founder & AI Platform Engineer",
    dates: "Jul 2026–present",
    summary:
      "Leading product and technical direction for a production AI runtime. Building long-running execution, persistent state, multi-agent orchestration, scoped access, human approvals, and failure recovery.",
  },
  {
    company: "Velaris",
    role: "AI Engineer",
    dates: "Sep 2025–Jul 2026",
    summary:
      "Built LLM-powered customer intelligence from emails, calls, tickets, and notes. Developed summarization, classification, insight extraction, and retrieval pipelines with grounding, validation, and traceability.",
  },
  {
    company: "Veracity Group",
    role: "AI Engineer",
    dates: "May 2024–Sep 2025",
    summary:
      "Led rapid LLM prototyping and delivered functional MVPs with end-to-end AI and backend ownership. Built RAG systems, chatbots, multimodal applications, task automation, and agent-graph solutions from client requirements.",
  },
  {
    company: "London Stock Exchange Group (LSEG)",
    role: "Intern, Engineering Machine Learning",
    dates: "Feb 2023–Dec 2023",
    summary:
      "Designed multi-step LLM pipelines with validation, code-to-graph transformation, and agent-oriented experiments. Automated text-processing and dataset workflows, reducing manual effort by approximately 90%.",
  },
  {
    company: "Independent",
    role: "Freelance AI/ML & Software Engineer",
    dates: "5+ years",
    summary:
      "Completed 200+ research and industry projects across software engineering, ML/AI, LLM applications, prototyping, experimentation, and technical delivery.",
  },
];

export function Career() {
  return (
    <section
      className="section wrap"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2 id="experience-title">Building AI across teams and products.</h2>
        </div>
      </div>
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-row" key={job.company}>
            <div>
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <span>{job.dates}</span>
            </div>
            <p>{job.summary}</p>
          </article>
        ))}
      </div>
      <div className="community-note">
        <h3>Community & recognition</h3>
        <p>
          Speaker, Keras Community Day Sri Lanka 2023 · Judge, Datastorm 5.0 ·
          2nd Place, Veracity OpenAI Challenge · 1st Place, Open Hack Day Sri
          Lanka · Top 10, Code Sprint 8.0 · IEEEXtreme participant (2 years)
        </p>
      </div>
    </section>
  );
}
