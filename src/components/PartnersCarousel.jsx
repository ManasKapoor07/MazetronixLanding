import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/partner8.jpg";

// 👇 Add or remove entries to match your actual brands
const partners = [
  { img: partner1, name: "Brand 1" },
  { img: partner2, name: "Brand 2" },
  { img: partner3, name: "Brand 3" },
//   { img: partner4, name: "Brand 4" },
  { img: partner5, name: "Brand 5" },
  { img: partner6, name: "Brand 6" },
  { img: partner7, name: "Brand 7" },
  { img: partner8, name: "Brand 8" },
];

// Duplicate for seamless infinite scroll
const doubled = [...partners, ...partners];

export default function PartnersCarousel() {
  return (
    <section id="partners" className="bg-slate-50 border-y border-slate-100 py-14 px-6 md:px-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Inter:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-3">
            Our Partners
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
            Trusted Brands We Work With
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }} />

          <div className="overflow-hidden">
            <div className="marquee-track gap-6">
              {doubled.map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-24  shadow-sm flex items-center justify-center px-4 mx-2 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}