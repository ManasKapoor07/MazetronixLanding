import { useState, useEffect, useRef } from "react";
import logoWhite from "../assets/logo-white.png";


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
//   { icon: "🛗", label: "Elevator Control" },
//   { icon: "💂", label: "Guard Patrol" },
  { icon: "🚧", label: "Boom Barrier" },
];

// Animated tech node network SVG
function NetworkGraphic() {
  const nodes = [
    { x: 50, y: 50, main: true },
    { x: 20, y: 18 },
    { x: 80, y: 15 },
    { x: 10, y: 50 },
    { x: 90, y: 45 },
    { x: 25, y: 78 },
    { x: 75, y: 80 },
    { x: 55, y: 20 },
    { x: 40, y: 75 },
    { x: 65, y: 60 },
    { x: 30, y: 40 },
    { x: 70, y: 30 },
    { x: 50, y: 88 },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 7], [2, 11], [3, 10], [4, 9], [5, 8], [6, 12],
    [7, 11], [10, 1], [9, 11], [8, 12],
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <circle cx="50" cy="50" r="45" fill="url(#centerGlow)" />

      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#lineGrad)"
          strokeWidth="0.4"
          opacity="0.7"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.9;0.3"
            dur={`${2 + (i * 0.3)}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Outer nodes */}
      {nodes.slice(1).map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="1.8"
          fill="#E0F2FE" stroke="#2563EB" strokeWidth="0.5"
          filter="url(#glow)"
        >
          <animate
            attributeName="r"
            values="1.6;2.2;1.6"
            dur={`${1.5 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Center main node — shield */}
      <circle cx="50" cy="50" r="7" fill="#1D4ED8" opacity="0.15" />
      <circle cx="50" cy="50" r="5" fill="#2563EB" filter="url(#glow)">
        <animate attributeName="r" values="4.5;5.5;4.5" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Shield icon in center */}
      <path
        d="M50 44 L54 46 L54 51 Q54 54 50 56 Q46 54 46 51 L46 46 Z"
        fill="white" opacity="0.95"
      />

      {/* Orbiting ring */}
      <circle cx="50" cy="50" r="30" fill="none"
        stroke="#06B6D4" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.5">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default function HeroSection() {
  const [activeService, setActiveService] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div  id="home" className=" bg-slate-50 font-sans overflow-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .animate-fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .animate-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.15s; }
        .delay-2 { transition-delay: 0.3s; }
        .delay-3 { transition-delay: 0.45s; }
        .delay-4 { transition-delay: 0.6s; }
        .service-chip {
          transition: all 0.3s ease;
        }
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
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.4);
        }
        .btn-secondary {
          transition: all 0.25s ease;
          border: 1.5px solid #CBD5E1;
        }
        .btn-secondary:hover {
          border-color: #2563EB;
          color: #2563EB;
          transform: translateY(-2px);
        }
        .badge-dot {
          width: 8px; height: 8px;
          background: #22C55E;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
            <img src={logoWhite} alt="Mazetronix Logo" className="w-15 h-15" />
          
          <div>
            <div className="font-display font-700 text-slate-900 text-2xl leading-tight tracking-tight font-bold">MAZETRONIX</div>
            <div className="text-xs text-slate-400 leading-none tracking-widest uppercase font-medium">Solutions</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#partners" className="hover:text-blue-600 transition-colors">Partners</a>
          {/* <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a> */}
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        {/* <a
          href="tel:9711211539"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-white btn-primary px-4 py-2 rounded-lg"
        >
          <span>📞</span> +91 97112 11539
        </a> */}
        
      </nav>

      {/* Hero */}
      <section className="relative grid-bg min-h-[calc(100vh-65px)] flex items-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-slate-50/40 to-cyan-50/60 pointer-events-none" />

        <div className="relative w-full  mx-auto px-6 md:px-16  flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* LEFT — Content */}
          <div className="flex-1 lg:-mt-32 mt-5 flex flex-col items-start">
            {/* Status badge */}
            {/* <div className={`inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm animate-fade-up ${visible ? "visible" : ""}`}>
              <span className="badge-dot"></span>
              <span className="text-xs font-medium text-slate-600 tracking-wide">Delhi's Trusted Security Integrator</span>
            </div> */}

            {/* Headline */}
            <h1 className={`font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5 animate-fade-up delay-1 ${visible ? "visible" : ""}`}>
              Smart Security &{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
                Intelligent
              </span>{" "}
              Infrastructure
            </h1>

            {/* Sub */}
            <p className={`text-slate-500 text-base md:text-lg leading-relaxed mb-8 animate-fade-up delay-2 ${visible ? "visible" : ""}`}>
                Complete & Customized Solution for Telecom, IT Networking, Security Systems used in Commercial & Residential Projects            </p>
            {/* CTAs */}
            <div className={`flex flex-wrap gap-3 mb-10 animate-fade-up delay-3 ${visible ? "visible" : ""}`}>
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
              <a
                href="#services"
                className="btn-secondary bg-white text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Explore Services
              </a>
            </div>

            {/* Trust stats */}
            <div className={`flex flex-wrap gap-6 pt-6 border-t border-slate-200 animate-fade-up delay-4 ${visible ? "visible" : ""}`}>
              {[
                { val: "500+", label: "Projects Done" },
                { val: "10+", label: "Solution Types" },
                // { val: "24/7", label: "Support" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-slate-900">{val}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className={`flex-1 flex mt-10 flex-col items-center gap-6 animate-fade-up delay-2 ${visible ? "visible" : ""}`}>
            {/* Network graphic card */}
            <div className="relative w-full max-w-[420px] aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-100 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 p-">
                  <NetworkGraphic />
                </div>
                {/* Corner label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 font-display tracking-wide">MAZETRONIX NETWORK</span>
                </div>
                
              </div>
            </div>

            {/* Scrolling service chips */}
            <div className="w-full max-w-[420px]">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3 text-center">Solutions We Deliver</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className={`service-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border cursor-default select-none
                      ${i === activeService
                        ? "active"
                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
                      }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
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