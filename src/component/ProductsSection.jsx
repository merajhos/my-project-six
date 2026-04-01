import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const ProductsSection = ({ products, addToCart, cart, remove, checkout }) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center">

        
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        
        <div className="mt-6 flex justify-center">
          <div className="bg-gray-200 rounded-full p-1 flex gap-1">
            
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full text-sm ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full text-sm ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Cart ({cart.length})
            </button>

          </div>
        </div>

        
        <div className="mt-10">

          
          {activeTab === "products" && (
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  p={p}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}

          
          {activeTab === "cart" && (
            <Cart
              cart={cart}
              remove={remove}
              checkout={checkout}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductsSection;