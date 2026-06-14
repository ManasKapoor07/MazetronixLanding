import { useState, useEffect, useRef } from "react";
import amitPhoto from "../assets/amit-verma.jpeg";

const expertise = [
  { icon: "🤝", title: "Customer Service Management", desc: "Decades of delivering exceptional service standards across technology, telecom, and security sectors." },
  { icon: "👥", title: "Team Leadership", desc: "Building and mentoring high-performance teams aligned with organizational goals and service benchmarks." },
  { icon: "📋", title: "Project Coordination", desc: "End-to-end project management ensuring on-time, on-budget delivery with quality adherence." },
  { icon: "🔗", title: "Client Relationship Development", desc: "Fostering long-term partnerships through trust, transparency, and consistent value creation." },
  { icon: "⚙️", title: "Operations Management", desc: "Streamlining operational processes for efficiency, scalability, and service excellence." },
  { icon: "📡", title: "Technology & Telecom Domain", desc: "Deep domain expertise across IT networking, security systems, and telecom infrastructure." },
];

const testimonials = [
  { quote: "Amit's team transformed our office security infrastructure seamlessly. Responsive, professional, and truly reliable.", author: "Rajesh Sharma", role: "Director, TechServe India" },
  { quote: "What sets Amit apart is his personal involvement in every project. The attention to detail is exceptional.", author: "Priya Nair", role: "Head of Operations, Nexwave Telecom" },
  { quote: "29 years of experience really shows. Everything was delivered on time and beyond expectations.", author: "Sunil Kapoor", role: "Facilities Manager, Horizon Realty" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(24px)", left: "translateX(-24px)", right: "translateX(24px)" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : (transforms[dir] || "translateY(24px)"),
      transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function AnimatedCounter({ target, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const num = parseInt(target, 10);
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * num));
      if (p < 1) requestAnimationFrame(step);
      else setCount(num);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function TestimonialSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[active];
  return (
    <div>
      <div key={active} style={{ animation: "abFade 0.45s ease forwards" }}>
        <svg width="32" height="24" viewBox="0 0 36 28" fill="none" style={{ marginBottom: 14 }}>
          <path d="M0 28V17.5C0 12.833 1.083 8.917 3.25 5.75 5.417 2.583 8.833.583 13.5 0l1.5 2.5C11.5 3.333 9.083 5 7.5 7.5 5.917 10 5.167 12.667 5.25 15.5H10V28H0zm20 0V17.5c0-4.667 1.083-8.583 3.25-11.75C25.417 2.583 28.833.583 33.5 0L35 2.5C31.5 3.333 29.083 5 27.5 7.5 25.917 10 25.167 12.667 25.25 15.5H30V28H20z" fill="#2563EB" fillOpacity="0.2"/>
        </svg>
        <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#1e293b", fontStyle: "italic", margin: "0 0 18px", fontFamily: "Constantia,'Palatino Linotype',Georgia,serif" }}>
          "{t.quote}"
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#2563EB,#06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0, fontFamily: "ui-sans-serif,system-ui,sans-serif" }}>
            {t.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", fontFamily: "ui-sans-serif,system-ui,sans-serif" }}>{t.author}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "ui-sans-serif,system-ui,sans-serif" }}>{t.role}</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 5, marginTop: 20 }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} style={{ width: i === active ? 20 : 6, height: 6, borderRadius: 3, background: i === active ? "#2563EB" : "#cbd5e1", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} />
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{ fontFamily: "Constantia,'Palatino Linotype',Palatino,Georgia,serif", background: "#fff" }}>
      <style>{`
        #about *, #about *::before, #about *::after { box-sizing: border-box; }

        @keyframes abFade { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }

        /* ── SECTION WRAPPER ── */
        .ab-wrap { padding: 96px 6vw; }
        @media (max-width: 768px) { .ab-wrap { padding: 64px 5vw; } }

        .ab-inner { max-width: 1120px; margin: 0 auto; }

        /* ── SECTION LABEL ── */
        .ab-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: ui-sans-serif,system-ui,sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #2563EB; margin-bottom: 12px;
        }
        .ab-label::before { content:''; display:inline-block; width:20px; height:2px; background:#2563EB; border-radius:1px; }

        .ab-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; margin: 0 0 48px;
          letter-spacing: -0.02em;
        }

        /* ── INTRO — magazine split ── */
        .ab-intro {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 0;
          align-items: stretch;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 72px;
        }
        @media (max-width: 900px) { .ab-intro { grid-template-columns: 1fr; } }

        .ab-photo-col {
          position: relative;
          min-height: 420px;
        }
        .ab-photo-col img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block;
        }
        /* Thin right-edge accent line */
        .ab-photo-col::after {
          content: '';
          position: absolute; top: 12%; bottom: 12%; right: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #2563EB 40%, #06B6D4 70%, transparent);
        }
        @media (max-width: 900px) {
          .ab-photo-col { min-height: 280px; }
          .ab-photo-col::after { display: none; }
        }

        .ab-content-col {
          padding: 44px 48px;
          display: flex; flex-direction: column; justify-content: center;
          background: #fff;
        }
        @media (max-width: 640px) { .ab-content-col { padding: 28px 24px; } }

        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: ui-sans-serif,system-ui,sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.11em;
          text-transform: uppercase; color: #2563EB; margin-bottom: 14px;
        }
        .ab-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563EB; animation: abPulse 2s infinite; }
        @keyframes abPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }

        .ab-name { font-size: clamp(32px, 4vw, 52px); font-weight: 800; color: #0f172a; line-height: 1.0; margin: 0 0 4px; letter-spacing: -0.02em; }
        .ab-role {
          font-size: 15px; font-style: italic; color: #64748b;
          margin: 0 0 22px;
          font-family: Constantia,'Palatino Linotype',Georgia,serif;
        }
        .ab-divider { width: 40px; height: 2px; background: linear-gradient(90deg,#2563EB,#06B6D4); border-radius: 1px; margin-bottom: 20px; }

        .ab-bio { font-size: 15px; line-height: 1.8; color: #475569; margin: 0 0 28px; }
        .ab-bio strong { color: #0f172a; font-weight: 700; }

        /* Stats strip inside card */
        .ab-stats {
          display: grid; grid-template-columns: repeat(3,1fr);
          border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;
          margin-bottom: 24px;
        }
        .ab-stat {
          padding: 14px 10px; text-align: center;
          border-right: 1px solid #e5e7eb;
          transition: background 0.2s;
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: #f0f9ff; }
        .ab-stat-val { font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1; font-family: ui-sans-serif,system-ui,sans-serif; }
        .ab-stat-lbl { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.07em; margin-top: 3px; font-family: ui-sans-serif,system-ui,sans-serif; }

        /* CTAs */
        .ab-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
        .ab-btn-p {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px; border-radius: 8px;
          background: #2563EB; color: #fff;
          font-size: 13px; font-weight: 700; text-decoration: none;
          font-family: ui-sans-serif,system-ui,sans-serif;
          transition: background 0.2s, transform 0.2s;
        }
        .ab-btn-p:hover { background: #1d4ed8; transform: translateY(-2px); }
        .ab-btn-s {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px; border-radius: 8px;
          border: 1.5px solid #cbd5e1; color: #334155;
          font-size: 13px; font-weight: 700; text-decoration: none; background: transparent;
          font-family: ui-sans-serif,system-ui,sans-serif;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .ab-btn-s:hover { border-color: #2563EB; color: #2563EB; transform: translateY(-2px); }

        /* ── EXPERTISE ── */
        .ab-exp-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 14px;
          margin-bottom: 72px;
        }
        @media (max-width: 900px) { .ab-exp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .ab-exp-grid { grid-template-columns: 1fr; } }

        .ab-exp-card {
          background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px;
          padding: 24px 20px; cursor: default;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease;
          position: relative; overflow: hidden;
        }
        .ab-exp-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg,#2563EB,#06B6D4);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.28s ease;
        }
        .ab-exp-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.1); border-color: #bfdbfe; background:#fff; }
        .ab-exp-card:hover::after { transform: scaleX(1); }
        .ab-exp-icon { font-size: 28px; margin-bottom: 12px; }
        .ab-exp-title { font-size: 13px; font-weight: 700; color: #0f172a; margin: 0 0 6px; font-family: ui-sans-serif,system-ui,sans-serif; }
        .ab-exp-desc { font-size: 12.5px; color: #64748b; line-height: 1.65; margin: 0; }

        /* ── BOTTOM ROW — testimonial + quote ── */
        .ab-bottom {
          display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
        }
        @media (max-width: 768px) { .ab-bottom { grid-template-columns: 1fr; } }

        .ab-testimonial-box {
          background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 36px;
        }
        @media (max-width: 540px) { .ab-testimonial-box { padding: 24px 20px; } }

        .ab-quote-box {
          background: #0f172a; border-radius: 16px; padding: 36px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 540px) { .ab-quote-box { padding: 24px 20px; } }
        .ab-quote-text {
          font-size: 16px; line-height: 1.75; color: #e2e8f0; font-style: italic;
          margin: 0 0 28px;
          font-family: Constantia,'Palatino Linotype',Georgia,serif;
        }
        .ab-quote-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }
        .ab-q-val { font-size: 34px; font-weight: 800; line-height: 1; background: linear-gradient(135deg,#60a5fa,#06B6D4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-family: ui-sans-serif,system-ui,sans-serif; }
        .ab-q-lbl { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.07em; margin-top: 4px; font-family: ui-sans-serif,system-ui,sans-serif; }
      `}</style>

      <div className="ab-wrap">
        <div className="ab-inner">

          {/* Section header */}
          <Reveal>
            <div className="ab-label">Meet the Team</div>
            <h2 className="ab-title">The person behind<br />Mazetronix</h2>
          </Reveal>

          {/* ── INTRO CARD — photo + bio ── */}
          <Reveal dir="up" delay={60}>
            <div className="ab-intro">
              {/* Photo */}
              <div className="ab-photo-col">
                <img
                  src={amitPhoto}
                  alt="Amit Verma"
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background = "linear-gradient(160deg,#dbeafe,#e0f2fe)";
                    e.target.parentNode.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:100px;font-weight:900;color:rgba(37,99,235,0.1)">AV</div>`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="ab-content-col">
                <div className="ab-eyebrow">
                  <span className="ab-eyebrow-dot" />
                  Mazetronix Solutions
                </div>
                <h3 className="ab-name">Amit Verma</h3>
                <p className="ab-role">Customer Service &amp; Operations Leader</p>
                <div className="ab-divider" />
                <p className="ab-bio">
                  A seasoned professional with over <strong>29 years of extensive experience</strong> in customer service management, operations, and client relationship development — primarily within technology, telecom, networking, and security solutions.
                </p>

                {/* Stats */}
                <div className="ab-stats">
                  <div className="ab-stat">
                    <div className="ab-stat-val"><AnimatedCounter target="29" suffix="+" /></div>
                    <div className="ab-stat-lbl">Yrs Experience</div>
                  </div>
                  <div className="ab-stat">
                    <div className="ab-stat-val"><AnimatedCounter target="500" suffix="+" /></div>
                    <div className="ab-stat-lbl">Projects</div>
                  </div>
                  <div className="ab-stat">
                    <div className="ab-stat-val"><AnimatedCounter target="100" suffix="%" /></div>
                    <div className="ab-stat-lbl">Satisfaction</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="ab-ctas">
                  <a
                    href="https://wa.me/919999935757?text=Hi%20Amit%2C%20I%27d%20like%20to%20connect%20regarding%20Mazetronix%20Solutions."
                    target="_blank" rel="noreferrer"
                    className="ab-btn-p"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.849L.057 23.571a.5.5 0 00.611.611l5.722-1.476A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.388l-.36-.214-3.733.962.994-3.594-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                    WhatsApp
                  </a>
                  {/* <a href="mailto:swati@mazetronix.com" className="ab-btn-s">
                    ✉️ Email Us
                  </a> */}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── EXPERTISE GRID ── */}
          <Reveal delay={40}>
            <div className="ab-label" style={{ marginBottom: 12 }}>Core Expertise</div>
            <h3 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, color: "#0f172a", margin: "0 0 24px", letterSpacing: "-0.015em" }}>
              What Amit brings to the table
            </h3>
          </Reveal>
          <div className="ab-exp-grid" style={{ marginBottom: 56 }}>
            {expertise.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 55}>
                <div className="ab-exp-card">
                  <div className="ab-exp-icon">{icon}</div>
                  <h4 className="ab-exp-title">{title}</h4>
                  <p className="ab-exp-desc">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── BOTTOM ROW ── */}
          <div className="ab-bottom">
            {/* Testimonial slider */}
            <Reveal dir="left">
              <div className="ab-testimonial-box">
                <div className="ab-label" style={{ marginBottom: 16 }}>Client Voices</div>
                <TestimonialSlider />
              </div>
            </Reveal>

            {/* Dark quote + mini stats */}
            <Reveal dir="right" delay={100}>
              <div className="ab-quote-box">
                <p className="ab-quote-text">
                  "Amit ensures every Mazetronix client receives a service experience that is responsive, reliable, and results-driven — backed by nearly three decades of industry expertise."
                </p>
                <div className="ab-quote-stats">
                  <div>
                    <div className="ab-q-val"><AnimatedCounter target="29" suffix="+" /></div>
                    <div className="ab-q-lbl">Years Experience</div>
                  </div>
                  <div>
                    <div className="ab-q-val"><AnimatedCounter target="500" suffix="+" /></div>
                    <div className="ab-q-lbl">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}