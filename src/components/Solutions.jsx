import { useState } from "react";
import { products } from "../data/products";
import ProductModal from "./ProductModal";

export default function Solutions() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="py-24 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Our Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelected(item)}
                className="cursor-pointer p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}