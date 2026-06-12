import cctv from "../assets/cctv.jpg";
// import pbx from "../assets/pbx.jpg";
import videoDoorphone from "../assets/video-doorphone.jpg";
import fireAlarm from "../assets/fire-alarm.jpg";
import intrusion from "../assets/intrusion.jpg";
import wifi from "../assets/wifi.jpg";
import networking from "../assets/networking.jpg";
import homeAutomation from "../assets/home-automation.jpg";
import mobileBooster from "../assets/mobile-booster.jpg";
import doorAccess from "../assets/door-access.jpg";
import elevatorControl from "../assets/elevator-control.jpg";
// import guardPatrol from "../assets/guard-patrol.jpg";
// import boomBarrier from "../assets/boom-barrier.jpg";

const services = [
  {
    img: cctv,
    title: "CCTV Surveillance",
    desc: "HD & IP-based camera systems for 24/7 monitoring of homes, offices, and commercial spaces.",
    tag: "Security",
  },
//   {
//     img: pbx,
//     title: "PBX / Intercom System",
//     desc: "Advanced telephone exchange and intercom solutions for seamless internal communication.",
//     tag: "Communication",
//   },
  {
    img: videoDoorphone,
    title: "Video Doorphone",
    desc: "See and speak with visitors before granting access — smart visual entry management.",
    tag: "Access",
  },
  {
    img: fireAlarm,
    title: "Fire Alarm System",
    desc: "Early detection fire alarm panels and sensors to protect lives and property.",
    tag: "Safety",
  },
  {
    img: intrusion,
    title: "Intrusion Detection",
    desc: "Motion sensors, door/window contacts, and alarm systems to detect unauthorized entry.",
    tag: "Security",
  },
  {
    img: wifi,
    title: "Wi-Fi Solutions",
    desc: "Enterprise-grade wireless networks for homes, offices, warehouses, and campuses.",
    tag: "Networking",
  },
  {
    img: networking,
    title: "Networking",
    desc: "Structured cabling, switches, routers, and end-to-end LAN/WAN infrastructure setup.",
    tag: "Networking",
  },
  {
    img: homeAutomation,
    title: "Home Automation",
    desc: "Smart lighting, curtains, climate, and appliance control — all from your phone.",
    tag: "Smart Home",
  },
  {
    img: mobileBooster,
    title: "Mobile Booster",
    desc: "Eliminate dead zones with signal amplifiers for strong, reliable cellular coverage indoors.",
    tag: "Connectivity",
  },
  {
    img: doorAccess,
    title: "Door Access Control",
    desc: "Biometric, card, and PIN-based access systems to control who enters your premises.",
    tag: "Access",
  },
//   {
//     img: elevatorControl,
//     title: "Elevator Control",
//     desc: "Floor-wise lift access management integrated with your building's security ecosystem.",
//     tag: "Automation",
//   },
//   {
//     img: guardPatrol,
//     title: "Guard Patrol System",
//     desc: "NFC/RFID-based patrol tracking to ensure guards follow their routes and schedules.",
//     tag: "Security",
//   },
//   {
//     img: boomBarrier,
//     title: "Boom Barrier / Turnstile",
//     desc: "Automated vehicle and pedestrian entry control for parking lots, gates, and campuses.",
//     tag: "Access",
//   },
];

const tagColors = {
  Security: "bg-blue-50 text-blue-600",
  Communication: "bg-violet-50 text-violet-600",
  Access: "bg-cyan-50 text-cyan-700",
  Safety: "bg-red-50 text-red-500",
  Networking: "bg-emerald-50 text-emerald-600",
  "Smart Home": "bg-amber-50 text-amber-600",
  Connectivity: "bg-sky-50 text-sky-600",
  Automation: "bg-indigo-50 text-indigo-600",
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(37,99,235,0.12);
        }
        .service-card:hover .card-img {
          transform: scale(1.05);
        }
        .card-img {
          transition: transform 0.4s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xl font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Security &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              Smart Solutions
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            From surveillance to automation — we design, supply, install, and support every system your building needs.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden h-44 bg-slate-100">
                <img
                  src={s.img}
                  alt={s.title}
                  className="card-img w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${tagColors[s.tag]}`}>
                  {s.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed flex-1">
                  {s.desc}
                </p>
                {/* <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                  Learn more <span>→</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-lg mb-4">
            Need something not listed above? We provide customised solutions too.
          </p>
          <a
            href="mailto:connect@mazetronix.com"
            className="inline-block text-lg font-semibold text-white px-6 py-3 rounded-xl shadow-md"
            style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
          >
            Request a Custom Solution →
          </a>
        </div>
      </div>
    </section>
  );
}