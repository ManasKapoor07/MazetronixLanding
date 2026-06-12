export default function ProductModal({
  product,
  onClose
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-white max-w-lg p-8 rounded-2xl">

        <h2 className="text-3xl font-bold">
          {product.title}
        </h2>

        <p className="mt-4">
          {product.description}
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Close
        </button>

      </div>

    </div>
  );
}