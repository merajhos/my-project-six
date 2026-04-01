import { useEffect, useState } from "react";
import './App.css'
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import ProductCard from "./component/ProductCard";
import Footer from "./component/Footer";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import ProductsSection from "./component/ProductsSection";
import { ToastContainer ,toast } from 'react-toastify'
import Cart from "./component/Cart";

function App() {
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const addToCart = (p) => {
    setCart([...cart, p]);
    toast.success("Added to cart");
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
    toast.error("Removed");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout Done");
  };

  return (
      <>
      <Navbar cartCount={cart.length} />
      <Banner />

      <ProductsSection
        products={products}
        addToCart={addToCart}
        cart={cart}
        remove={remove}
        checkout={checkout}
      />

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
