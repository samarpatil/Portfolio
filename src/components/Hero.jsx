
function Hero() {
  const roles = ["Full Stack Developer", "React Specialist", "Node.js Engineer", "Problem Solver"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const target = roles[roleIdx];
    let i = typing ? displayed.length : displayed.length;
    let timer;
    if (typing) {
      if (displayed.length < target.length) {
        timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      } else {
        timer = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="hero">
      <ParticleGrid />
      <div className="hero-content">
        <div className="hero-tag reveal">&#47;&#47; AVAILABLE FOR WORK</div>
        <h1 className="hero-name reveal-delay-1">
          <span className="hero-first">Alex</span>
          <span className="hero-last">Dev</span>
        </h1>
        <div className="hero-role reveal-delay-2">
          <span className="hero-role-prefix">&gt;_</span>
          <span className="hero-role-text">{displayed}</span>
          <span className="hero-cursor">|</span>
        </div>
        <p className="hero-desc reveal-delay-3">
          Crafting digital experiences that live at the intersection of <em>performance</em> and <em>beauty</em>. I build full-stack applications that scale.
        </p>
        <div className="hero-actions reveal-delay-4">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Let's Talk</a>
        </div>
        <div className="hero-stats reveal-delay-5">
          {[["3+", "Years Exp"], ["20+", "Projects"], ["15+", "Clients"], ["99%", "Satisfaction"]].map(([n, l]) => (
            <div key={l} className="hero-stat">
              <span className="hero-stat-num">{n}</span>
              <span className="hero-stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
