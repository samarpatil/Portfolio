import { useEffect, useRef, useState } from "react";
import "./App.css";

// ── Dark Mode Context ─────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Now", "Contact"];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-left">CSE'28 · MANIT Bhopal</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? (
          // Sun icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          // Moon icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const roles = ["Full Stack Developer", "Problem Solver", "CSE Undergrad"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timer;
    if (typing) {
      if (displayed.length < target.length) {
        timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      } else {
        timer = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="flex flex-wrap">
          <h1 className="hero-name reveal-delay-1 py-5">
            <span style={{ display: "block" }}>Samar</span>
            <span style={{ display: "block" }} className="thin">Patil</span>
          </h1>
        </div>
        <div className="hero-role reveal-delay-2">
          {displayed}
          <span className="hero-cursor">|</span>
        </div>
        <p className="hero-desc reveal-delay-3">
          Crafting clean, purposeful web experiences. I build full-stack applications that balance performance with elegant design.
        </p>
        <div className="hero-actions reveal-delay-4">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/Resume_Final.pdf" className="btn btn-ghost">
            <span>Resume</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </a>
        </div>
        <div className="hero-stats reveal-delay-5">
          {[
            ["< 1", "Years Exp"],
            ["2+", "Projects"],
          ].map(([n, l]) => (
            <div key={l} className="hero-stat">
              <span className="hero-stat-num">{n}</span>
              <span className="hero-stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-avatar-wrap">
              <div className="about-monogram">SP</div>
            </div>
            <div className="terminal-card">
              <div className="terminal-bar">
                <span /><span /><span />
              </div>
              <code>
                <div><span className="c-gray">const</span> <span className="c-green">samar</span> = {"{"}</div>
                <div>&nbsp;&nbsp;role: <span className="c-yellow">"Full Stack Dev"</span>,</div>
                <div>&nbsp;&nbsp;passion: <span className="c-yellow">"Building things"</span>,</div>
                <div>&nbsp;&nbsp;coffee: <span className="c-cyan">Infinity</span></div>
                <div>{"}"}</div>
              </code>
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-heading">
              Turning ideas into <span className="text-accent">reality</span>
            </h2>
            <p>
              I am a Computer Science undergraduate at MANIT Bhopal with a strong interest in building real-world solutions through technology. Originally from Burhanpur, my journey has been driven by curiosity and a continuous desire to learn and improve.
            </p>
            <p>
              I actively develop projects to enhance my technical skills and gain hands-on experience. I enjoy solving problems, exploring new technologies, and creating applications that have practical impact.
            </p>
            <div className="about-pillars">
              {[
                { icon: "⚡", title: "Performance First", desc: "Every millisecond matters. I optimize for speed at every layer." },
                { icon: "✦", title: "Design Sensibility", desc: "Beautiful UI isn't a luxury — it's a competitive advantage." },
                { icon: "◈", title: "Clean Architecture", desc: "Code that's readable, maintainable, and built to scale." },
              ].map((p) => (
                <div key={p.title} className="about-pillar">
                  <span className="pillar-icon">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ───────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    cat: "Frontend",
    items: [
      { n: "React", p: 95 },
      { n: "TypeScript", p: 88 },
      { n: "CSS / Tailwind", p: 92 },
      { n: "Next.js", p: 20 },
    ],
  },
  {
    cat: "Backend",
    items: [{ n: "Node.js", p: 90 }],
  },
  {
    cat: "Database & Tools",
    items: [
      { n: "Git", p: 90 },
    ],
  },
];

function SkillBar({ name, percent }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setW(percent); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [percent]);
  return (
    <div ref={ref} className="skill-bar-row">
      <div className="skill-bar-header">
        <span>{name}</span>
        <span className="skill-pct">{w > 0 ? `${percent}%` : ""}</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-heading">
          My <span className="text-accent">Arsenal</span>
        </h2>
        <div className="skills-grid">
          {SKILLS.map((cat) => (
            <div key={cat.cat} className="skill-card">
              <div className="skill-card-header">{cat.cat}</div>
              {cat.items.map((s) => (
                <SkillBar key={s.n} name={s.n} percent={s.p} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "My Portfolio",
    tag: "Front-End",
    year: "2026",
    desc: "My own Portfolio that shows about my projects,skills and many more things", 
    tech: ["React", "JavaScript","Tailwindcss"],
    accent: "#C7522A",
    githubUrl: "https://github.com/samarpatil/Portfolio",
    liveUrl: "https://samarportfolio-omega.vercel.app/",
  },

  {
    id: 2,
    title: "Weather App",
    tag: "Front-End",
    year: "2026",
    desc: "Real-time weather app using API integration.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    accent: "#2D3A8C",
    githubUrl: "https://github.com/samarpatil/Weather-App",
    liveUrl: "https://weather-app-ten-tan-92.vercel.app/",
  },
  {
    id: 3,
    title: "To Do Manager",
    tag: "Front-End",
    year: "2026",
    desc: "Clean, minimal task list manager with local persistence.",
    tech: ["React", "JavaScript"],
    accent: "#C7522A",
    githubUrl: "https://github.com/samarpatil/To-Do-App",
    liveUrl: "https://to-do-app-weld-sigma-51.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-heading">
          Selected <span className="text-accent">Work</span>
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project-card" style={{ "--card-accent": p.accent }}>
              <div className="project-card-top" />
              <div className="project-card-content">
                <div className="project-meta">
                  <span className="project-tag">{p.tag}</span>
                  <span className="project-year">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.liveUrl} className="project-link">
                    View Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href={p.githubUrl} className="project-link-gh">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ── Now Section ───────────────────────────────────────────────────────────────
function Now() {
  const items = [
    {
      icon: "🔨",
      title: "Building",
      text: "A full-stack expense tracker with React, Node.js, and MongoDB — focusing on real-time updates and data visualisation.",
    },
    {
      icon: "📖",
      title: "Learning",
      text: "Diving deep into Next.js App Router, server components, and exploring TypeScript generics.",
    },
    {
      icon: "🎯",
      title: "Focused on",
      text: "Strengthening DSA fundamentals on LeetCode — currently working through graph problems and dynamic programming.",
    },
    {
      icon: "🌱",
      title: "Exploring",
      text: "Open source contributions and understanding how large codebases are maintained and scaled.",
    },
  ];

  return (
    <section className="now-section section" id="now">
      <div className="container">
        <div className="section-label">05 — Now</div>
        <h2 className="section-heading">
          What I'm <span className="text-accent">Building</span>
        </h2>
        <p className="now-intro">
          A snapshot of what I'm currently working on, learning, and thinking about. Updated regularly.
        </p>
        <div className="now-grid">
          {items.map((item) => (
            <div key={item.title} className="now-card">
              <div className="now-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="now-timestamp">
          <span className="now-dot" />
          Last updated: April 2026
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-heading">
          Let's <span className="text-accent">Connect</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind? Let's build something great together. I'm always open to exciting opportunities and new collaborations.
            </p>
            <div className="contact-items">
              {[
                { icon: "✉", label: "Email", val: "patilsamar2304@gmail.com" },
                { icon: "📍", label: "Location", val: "India" },
                { icon: "⏱", label: "Response", val: "Within 24 hours" },
              ].map((c) => (
                <div key={c.label} className="contact-item">
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <div className="contact-item-label">{c.label}</div>
                    <div className="contact-item-val">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="socials">
              {[
                { name: "GitHub", url: "https://github.com/samarpatil" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/samar-patil-31394a31a" },
              ].map((s) => (
                <a key={s.name} href={s.url} className="social-pill" target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">S P<span className="nav-logo-dot"></span></div>
        <p className="footer-copy">© 2026 Samar Patil · Built with React + Vite.</p>
        <a href="#hero" className="footer-back">Back to top ↑</a>
      </div>
    </footer>
  );
}

// ── Custom 404 Page ───────────────────────────────────────────────────────────
export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-code">
          <span className="not-found-404">404</span>
          <div className="not-found-glitch" aria-hidden="true">404</div>
        </div>
        <div className="not-found-terminal">
          <div className="terminal-bar">
            <span /><span /><span />
          </div>
          <code>
            <div><span className="c-gray">$</span> <span className="c-green">find</span> <span className="c-yellow">/page</span></div>
            <div className="c-gray">searching...</div>
            <div><span style={{ color: "#ef4444" }}>error:</span> page not found</div>
            <div className="c-gray">exit code: 404</div>
          </code>
        </div>
        <h2 className="not-found-msg">This page doesn't exist.</h2>
        <p className="not-found-sub">You might have followed a broken link, or the page has been moved.</p>
        <a href="/" className="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 15, height: 15 }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </a>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}