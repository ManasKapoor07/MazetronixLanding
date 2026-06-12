import { useState, useEffect, useRef } from "react";
import logoWhite from "../assets/logo.png";
import cctv from "../assets/cctv.jpg";
import videoDoorphone from "../assets/video-doorphone.jpg";
import fireAlarm from "../assets/fire-alarm.jpg";
import intrusion from "../assets/intrusion.jpg";
import wifi from "../assets/wifi.jpg";
import networking from "../assets/networking.jpg";
import homeAutomation from "../assets/home-automation.jpg";
import mobileBooster from "../assets/mobile-booster.jpg";
import doorAccess from "../assets/door-access.jpg";

const products = [
  { image: cctv,           label: "CCTV Surveillance",    desc: "HD & IP cameras for 24/7 monitoring" },
  { image: videoDoorphone, label: "Video Doorphone",       desc: "Smart entry with visual verification" },
  { image: fireAlarm,      label: "Fire Alarm Systems",    desc: "Early detection & emergency alerts" },
  { image: intrusion,      label: "Intrusion Detection",   desc: "Perimeter & motion-based security" },
  { image: wifi,           label: "Wi-Fi Solutions",       desc: "Enterprise-grade wireless networks" },
  { image: networking,     label: "Networking",            desc: "Structured cabling & LAN/WAN setup" },
  { image: mobileBooster,  label: "Mobile Booster",        desc: "Strong signal coverage everywhere" },
  { image: doorAccess,     label: "Door Access Control",   desc: "Biometric & card-based entry systems" },
];

const services = [
  { icon: "📹", label: "CCTV" },
  { icon: "📞", label: "PBX / Intercom" },
  { icon: "🔔", label: "Video Doorphone" },
  { icon: "🔥", label: "Fire Alarm" },
  { icon: "🚨", label: "Intrusion" },
  { icon: "📶", label: "Wi-Fi Solutions" },
  { icon: "🌐", label: "Networking" },
  { icon: "🏠", label: "Home Automation" },
  { icon: "📡", label: "Mobile Booster" },
  { icon: "🔐", label: "Door Access" },
  { icon: "🚧", label: "Boom Barrier" },
];

export default function HeroSection() {
  const [activeService, setActiveService] = useState(0);
  const [current, setCurrent]             = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prev, setPrev]                   = useState(null);
  const [visible, setVisible]             = useState(false);
  const animatingRef                      = useRef(false);
  const currentRef                        = useRef(0);

  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveService((p) => (p + 1) % services.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((currentRef.current + 1) % products.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  function goTo(next) {
    if (animatingRef.current || next === currentRef.current) return;
    animatingRef.current = true;
    setPrev(currentRef.current);
    setCurrent(next);
    setTimeout(() => {
      setPrev(null);
      animatingRef.current = false;
    }, 500);
  }

  const p = products[current];

  return (
    <div id="home" className="bg-slate-50 overflow-hidden">
      <style>{`
        * { font-family: Constantia, 'Palatino Linotype', Palatino, Georgia, serif !important; }
        body { font-family: Constantia, 'Palatino Linotype', Palatino, Georgia, serif !important; }
        .font-display { font-family: Constantia, 'Palatino Linotype', Palatino, Georgia, serif !important; }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 0.15s; }
        .d2 { transition-delay: 0.30s; }
        .d3 { transition-delay: 0.45s; }
        .d4 { transition-delay: 0.60s; }

        .service-chip { transition: all 0.3s ease; }
        .service-chip.active {
          background: #2563EB;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 14px rgba(37,99,235,0.35);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
          transition: all 0.25s ease;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.4); }

        .btn-secondary { transition: all 0.25s ease; border: 1.5px solid #CBD5E1; }
        .btn-secondary:hover { border-color: #2563EB; color: #2563EB; transform: translateY(-2px); }

        .grid-bg {
          background-image:
            linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* ── Carousel ── */
        .carousel-wrap {
          position: relative;
          width: 100%;
          max-width: 620px;
          aspect-ratio: 6/4;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(37,99,235,0.18), 0 2px 8px rgba(0,0,0,0.08);
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .carousel-slide.enter  { opacity: 1; transform: scale(1); }
        .carousel-slide.exit   { opacity: 0; transform: scale(1.04); }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 55%);
        }

        .carousel-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 20px 18px;
        }

        .carousel-badge {
          display: inline-block;
          background: rgba(37,99,235,0.85);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 6px;
          font-family: Constantia, 'Palatino Linotype', Palatino, Georgia, serif;
        }

        .carousel-title {
          font-family: Constantia, 'Palatino Linotype', Palatino, Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 4px;
        }

        .carousel-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }

        /* dot indicators */
        .dot-row {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 14px;
        }
        .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #CBD5E1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #2563EB;
          width: 20px;
          border-radius: 4px;
        }

        /* nav arrows */
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.88);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          color: #1e40af;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transition: all 0.2s ease;
          z-index: 10;
        }
        .arrow-btn:hover { background: #fff; box-shadow: 0 4px 16px rgba(37,99,235,0.25); }
        .arrow-btn.left  { left: 10px; }
        .arrow-btn.right { right: 10px; }

        @keyframes badgePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }
        .badge-dot {
          width: 8px; height: 8px;
          background: #22C55E;
          border-radius: 50%;
          animation: badgePulse 2s infinite;
        }

        /* ── Mobile nav hamburger ── */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .mobile-menu span {
          display: block;
          width: 22px;
          height: 2px;
          background: #334155;
          border-radius: 2px;
          transition: all 0.25s ease;
        }

        @media (max-width: 767px) {
          .mobile-menu { display: flex; }

          /* Nav logo text scale down */
          .nav-logo-title { font-size: 1.25rem !important; }
          .nav-logo-sub   { font-size: 0.6rem !important; }
          .nav-logo-img   { width: 4rem !important; height: 2rem !important; }

          /* Hero layout: stack vertically, carousel first on mobile */
          .hero-inner {
            flex-direction: column-reverse !important;
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
            gap: 2rem !important;
          }

          /* Left col: full width, centered text on mobile */
          .hero-left {
            margin-top: 0 !important;
            align-items: center !important;
            text-align: center !important;
          }

          /* CTA buttons: center */
          .hero-ctas {
            justify-content: center !important;
          }

          /* Stats: center */
          .hero-stats {
            justify-content: center !important;
          }

          /* Carousel: full width, reasonable height */
          .hero-right {
            width: 100% !important;
            margin-top: 0 !important;
          }

          .carousel-wrap {
            max-width: 100% !important;
            border-radius: 14px !important;
          }

          .carousel-title { font-size: 16px !important; }
          .carousel-desc  { font-size: 12px !important; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          /* Tablet: stack, carousel below, left-aligned */
          .hero-inner {
            flex-direction: column !important;
            align-items: center !important;
            padding-top: 2.5rem !important;
            padding-bottom: 4rem !important;
            gap: 2.5rem !important;
          }

          .hero-left {
            margin-top: 0 !important;
            align-items: center !important;
            text-align: center !important;
            max-width: 680px;
          }

          .hero-ctas { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }

          .hero-right {
            width: 100% !important;
            max-width: 540px !important;
            margin-top: 0 !important;
          }

          .carousel-wrap { max-width: 540px !important; }
        }
      `}</style>

      {/* ── Navbar ── */}
     <nav className="w-full px-10 py-4 flex flex-col bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between py-3 ">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src={logoWhite} alt="Mazetronix Logo" className="w-10 h-10 md:w-30 md:h-30 object-contain" />
      <div>
        <div className="font-bold text-slate-900 text-lg md:text-5xl leading-tight tracking-tight">
          MAZETRONIX
        </div>
        <div className="text-xs md:text-2xl text-slate-700 uppercase font-bold tracking-widest">
          Solutions
        </div>
      </div>
    </div>

    {/* Desktop nav */}
    <div className="hidden md:flex items-center gap-8 text-xl text-slate-700 font-medium">
      <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
      <a href="#partners" className="hover:text-blue-600 transition-colors">Partners</a>
      <a href="#contact"  className="hover:text-blue-600 transition-colors">Contact</a>
    </div>

    {/* Hamburger button */}
    <button
      className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-slate-100 transition-colors"
      onClick={() => setMenuOpen(prev => !prev)}
      aria-label="Toggle menu"
    >
      <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
      <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>
  </div>

  {/* Mobile dropdown */}
  <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}>
    <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
      <a href="#services" onClick={() => setMenuOpen(false)} className="px-2 py-2.5 text-slate-600 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Services</a>
      <a href="#partners" onClick={() => setMenuOpen(false)} className="px-2 py-2.5 text-slate-600 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Partners</a>
      <a href="#contact"  onClick={() => setMenuOpen(false)} className="px-2 py-2.5 text-slate-600 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors">Contact</a>
    </div>
  </div>
</nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-nav-menu"
        style={{ display: 'none' }}
        className="md:hidden flex-col bg-white border-b border-slate-100 px-6 py-4 gap-4 shadow-sm"
      >
        {['Services', 'Partners', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xl text-slate-600 font-medium hover:text-blue-600 transition-colors"
            onClick={() => {
              const menu = document.getElementById('mobile-nav-menu');
              if (menu) menu.style.display = 'none';
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* ── Hero ── */}
      <section className="relative grid-bg min-h-[calc(100vh-80px)] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-slate-50/40 to-cyan-50/60 pointer-events-none" />

        <div className="hero-inner relative w-full mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-10 lg:py-0">

          {/* ── LEFT ── */}
          <div className="hero-left flex-1 lg:-mt-32 mt-5 flex flex-col items-start">

            <h1 className={`font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5 fade-up d1 ${visible ? "visible" : ""}`}>
              Smart Security &{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
              >
                Intelligent
              </span>{" "}
              Infrastructure
            </h1>

            <p className={`text-slate-500 text-base md:text-xl leading-relaxed mb-8 fade-up d2 ${visible ? "visible" : ""}`}>
              Mazetronix Solutions delivers advanced security, telecom, and IT networking systems for homes, businesses, and enterprise environments. From intelligent surveillance to seamless connectivity, we design and deploy technology that keeps you protected and connected.
            </p>

            <div className={`hero-ctas flex flex-wrap gap-3 mb-10 fade-up d3 ${visible ? "visible" : ""}`}>
              <a
                href="https://wa.me/919999935757?text=Hi%20MAZETRONIX!%20I%27d%20like%20a%20free%20consultation."
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.849L.057 23.571a.5.5 0 00.611.611l5.722-1.476A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.388l-.36-.214-3.733.962.994-3.594-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Talk to a Consultant
              </a>
              <a href="#services" className="btn-secondary bg-white text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold">
                Explore Services
              </a>
            </div>

            <div className={`hero-stats flex flex-wrap gap-6 pt-6 border-t border-slate-200 fade-up d4 ${visible ? "visible" : ""}`}>
              {[
                { val: "500+", label: "Projects Done" },
                { val: "10+",  label: "Solution Types" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-slate-900">{val}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Product Carousel ── */}
          <div className={`hero-right flex-1 flex flex-col items-center gap-6 lg:-mt-30 fade-up ${visible ? "visible" : ""}`}>

            <div className="carousel-wrap">
              {prev !== null && (
                <div className="carousel-slide exit" key={`prev-${prev}`}>
                  <img src={products[prev].image} alt={products[prev].label} />
                  <div className="carousel-overlay" />
                </div>
              )}

              <div className="carousel-slide enter" key={`curr-${current}`}>
                <img src={p.image} alt={p.label} />
                <div className="carousel-overlay" />
                <div className="carousel-label">
                  <span className="carousel-badge">Our Solution</span>
                  <p className="carousel-title">{p.label}</p>
                  <p className="carousel-desc">{p.desc}</p>
                </div>
              </div>

              <button
                className="arrow-btn left"
                onClick={() => goTo((current - 1 + products.length) % products.length)}
                aria-label="Previous product"
              >‹</button>
              <button
                className="arrow-btn right"
                onClick={() => goTo((current + 1) % products.length)}
                aria-label="Next product"
              >›</button>
            </div>

            <div className="dot-row">
              {products.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="white" opacity="0.7"/>
          </svg>
        </div>
      </section>
    </div>
  );
}