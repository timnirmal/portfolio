import { ArrowUpRight } from "lucide-react";

export function AgentRuntimeFeature() {
  return (
    <section className="runtime-feature wrap" aria-labelledby="runtime-title">
      <div>
        <p className="eyebrow">CURRENTLY BUILDING</p>
        <h2 id="runtime-title">AgentRuntime</h2>
        <p className="runtime-role">
          Founder & AI Platform Engineer · July 2026–present
        </p>
        <p>
          A platform for building and running production AI agents and automated
          business workflows, combining LLM reasoning with tools, integrations,
          human approvals, and reliable execution.
        </p>
        <a
          className="button primary"
          href="https://agentruntime.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore AgentRuntime <ArrowUpRight size={17} />
        </a>
      </div>
      <div>
        <h3>From AI reasoning to reliable execution.</h3>
        <p>
          I lead the product and technical direction, designing and building the
          agentic workflow architecture that connects AI reasoning with
          deterministic execution.
        </p>
        <ul>
          <li>Loops, parallel tasks, and conditional workflows</li>
          <li>Persistent state, retries, and failure recovery</li>
          <li>Human approvals and resumable execution</li>
          <li>External tools, MCP integrations, APIs, and webhooks</li>
          <li>Execution tracing and auditable workflow history</li>
        </ul>
      </div>
    </section>
  );
}
