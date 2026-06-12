const WHATSAPP_NUMBER = "919999935757"; // Chat / general enquiry
const QUOTE_NUMBER = "919810334204";   // Get custom quote

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
  "Other / Custom Solution",
];

function buildWhatsAppURL(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export default function ContactSection() {
  const handleWhatsApp = () => {
    const msg = "Hi MAZETRONIX! I'd like to know more about your services.";
    window.open(buildWhatsAppURL(WHATSAPP_NUMBER, msg), "_blank");
  };

  const handleQuote = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const service = e.target.service.value;
    const detail = e.target.detail.value.trim();

    const msg =
      `Hi MAZETRONIX! I'd like to get a custom quote.\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `🔧 Service: ${service}\n` +
      (detail ? `📝 Details: ${detail}` : "");

    window.open(buildWhatsAppURL(QUOTE_NUMBER, msg), "_blank");
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .input-field {
          width: 100%;
          padding: 0.65rem 1rem;
          border: 1.5px solid #E2E8F0;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          color: #1E293B;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: #F8FAFC;
          font-family: 'Inter', sans-serif;
        }
        .input-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
          background: white;
        }
        .btn-whatsapp {
          background: linear-gradient(135deg, #25D366, #128C7E);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.35);
        }
        .btn-quote {
          background: linear-gradient(135deg, #2563EB, #1D4ED8);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-quote:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .contact-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(37,99,235,0.1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xl font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Let's Build Something{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              Secure Together
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Reach out for a free consultation, quick query, or a detailed custom quote — we're just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — WhatsApp + Info */}
          <div className="flex flex-col gap-6">

            {/* WhatsApp CTA card */}
            <div className="contact-card rounded-2xl border border-slate-100 shadow-sm p-8 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-md text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Chat on WhatsApp</h3>
                  <p className="text-sm text-slate-500">Quick queries, fast responses</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Have a quick question or want to discuss your requirements informally? Drop us a WhatsApp message and our team will respond promptly.
              </p>
              <button
                onClick={handleWhatsApp}
                className="btn-whatsapp w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.849L.057 23.571a.5.5 0 00.611.611l5.722-1.476A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.388l-.36-.214-3.733.962.994-3.594-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Chat with Us on WhatsApp
              </button>
            </div>

            {/* Contact info */}
            <div className="contact-card rounded-2xl border border-slate-100 shadow-sm p-6 bg-white">
              <h3 className="font-display text-base font-bold text-slate-900 mb-5">Contact Information</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "📞", label: "Phone", val: "+91 9999935757" },
                  { icon: "📧", label: "Email", val: "connect@mazetronix.com" },
                //   { icon: "🌐", label: "Website", val: "www.mazetronix.com" },
                  {
                    icon: "📍",
                    label: "Address",
                    val: "A-24/9, Mohan Co-operative Industrial Estate, Mathura Road, Saidabad, New Delhi – 110044",
                  },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{icon}</span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
                      <p className="text-sm text-slate-700 font-medium mt-0.5">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Quote form */}
          <div className="contact-card rounded-2xl border border-slate-100 shadow-sm p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl shadow">
                📋
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">Get a Custom Quote</h3>
                <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleQuote} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Your Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="input-field"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. 98100 00000"
                  className="input-field"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Service Required *
                </label>
                <select name="service" required className="input-field">
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Additional Details
                </label>
                <textarea
                  name="detail"
                  rows={3}
                  placeholder="Tell us about your space, requirements, or any specific needs..."
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-quote w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow mt-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.849L.057 23.571a.5.5 0 00.611.611l5.722-1.476A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.388l-.36-.214-3.733.962.994-3.594-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Send Quote Request on WhatsApp
              </button>

              <p className="text-xs text-slate-400 text-center">
                This will open WhatsApp with your details pre-filled. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}