import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cartCount }) => {
  return (
    
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-purple-600">DigiTools</h1>

      <div className="hidden md:flex gap-6 text-sm">
        <a>Products</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Testimonials</a>
        <a>FAQ</a>
      </div>

      <div className="flex gap-4 items-center">
        <span>Login</span>
        <button className="bg-purple-600 text-white px-4 py-1 rounded-full">
          Get Started
        </button>
        
        <span className="flex items-center gap-1">
          <FaShoppingCart />
          {cartCount}
        </span>
      </div>
    </div>
  );
};
export default Navbar;