import logoWhite from "../assets/logo-white.png";


const currentYear = new Date().getFullYear();

const services = [
  "CCTV Surveillance",
  "PBX / Intercom System",
  "Video Doorphone",
  "Fire Alarm System",
  "Intrusion Detection",
  "Wi-Fi Solutions",
  "Networking",
  "Home Automation",
  "Mobile Booster",
  "Door Access Control",
//   "Elevator Control",
//   "Guard Patrol System",
  "Boom Barrier / Turnstile",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #60A5FA;
        }
        .social-btn {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .social-btn:hover {
          background: #2563EB;
          transform: translateY(-2px);
        }
      `}</style>



      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="lg:col-span-1">
         <div className="flex items-center gap-3 -mt-4 -ml-5 md:-ml-10 md:-mt-4">
            <img src={logoWhite} alt="Mazetronix Logo" className="w-16 h-16 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <div className="md:-ml-6 -ml-4">
            <div className="font-display font-bold text-white text-xl md:text-2xl leading-tight tracking-tight">MAZETRONIX</div>
            <div className="text-base md:text-xl text-slate-400 leading-none tracking-widest uppercase">Solutions</div>
            </div>
        </div>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              {
                label: "WhatsApp",
                href: "https://wa.me/919999935757",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.849L.057 23.571a.5.5 0 00.611.611l5.722-1.476A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.388l-.36-.214-3.733.962.994-3.594-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:connect@mazetronix.com",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                ),
              },
            //   {
            //     label: "Website",
            //     href: "https://www.mazetronix.com",
            //     icon: (
            //       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            //         <circle cx="12" cy="12" r="10"/>
            //         <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            //       </svg>
            //     ),
            //   },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-btn w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white font-semibold text-lg uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer-link text-base text-slate-400 flex items-center gap-2">
                  <span className="text-blue-500 text-xs">›</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-white font-semibold text-lg uppercase tracking-widest mb-5">
            Our Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="footer-link text-base text-slate-400 flex items-center gap-2">
                  <span className="text-blue-500 text-xs">›</span> {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-display text-white font-semibold text-lg uppercase tracking-widest mb-5">
            Find Us
          </h4>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📍",
                text: "A-24/9, Mohan Co-op Industrial Estate, Mathura Road, Saidabad, New Delhi – 110044",
              },
              { icon: "📞", text: "+91 9999935757" },
              { icon: "📧", text: "connect@mazetronix.com" },
            //   { icon: "🌐", text: "www.mazetronix.com" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="text-base mt-0.5">{icon}</span>
                <span className="text-sm text-slate-400 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500 text-center sm:text-left">
          © {currentYear} <span className="text-slate-400 font-medium">MAZETRONIX Solutions</span>. All rights reserved.
        </p>
        {/* <p className="text-xs text-slate-600">
          Designed &amp; Built with ❤️ in New Delhi
        </p> */}
      </div>
    </footer>
  );
}