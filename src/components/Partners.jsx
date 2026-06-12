const logos = [
  "/partners/p1.png",
  "/partners/p2.png",
  "/partners/p3.png",
  "/partners/p4.png",
  "/partners/p5.png",
  "/partners/p6.png",
  "/partners/p7.png",
  "/partners/p8.png",
  "/partners/p9.png",
  "/partners/p10.png"
];

export default function Partners() {
  return (
    <section className="py-20 bg-gray-950 overflow-hidden">

      <h2 className="text-center text-white text-4xl font-bold mb-10">
        Trusted Partners
      </h2>

      <div className="relative overflow-hidden">

        <div className="flex animate-marquee gap-16">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              className="h-20 object-contain"
            />
          ))}
        </div>

      </div>

    </section>
  );
}