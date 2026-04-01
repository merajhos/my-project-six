import { FaGlobe, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-bold">DigiTools</h2>
          <p className="mt-3 text-sm">
            Powerful digital tools to enhance productivity and creativity.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3 flex justify-center">Social Links</h3>
          <div className=" justify-center flex gap-4 text-xl">
            <a href="#" className="hover:text-green-600 transition p-[2px] rounded">
              <FaGlobe />
            </a>
            <a href="#" className="hover:text-blue-400 transition p-[2px] rounded">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500 transition p-[2px] rounded">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;