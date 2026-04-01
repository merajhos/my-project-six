import { FaCheckCircle } from "react-icons/fa";
const ProductCard = ({ p, addToCart }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between">
        <img src={p.icon} className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
        <span className="text-xs bg-purple-100 px-2 p-1 rounded">
          {p.tagType}
        </span>
      </div>

      <h3 className="mt-2 font-semibold">{p.name}</h3>
      <p className="text-sm text-gray-500">{p.description}</p>

      <p className="mt-2 font-bold">
        ${p.price} / {p.period}
      </p>

      <ul className="text-sm mt-2">
        {p.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> {f}</li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(p)}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full" >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;