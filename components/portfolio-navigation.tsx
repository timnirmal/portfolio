"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <a
          className="wordmark"
          href="#main"
          onClick={() => setOpen(false)}
          aria-label="Thimira home"
        >
          thimira<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#expertise" onClick={() => setOpen(false)}>
            Expertise
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
