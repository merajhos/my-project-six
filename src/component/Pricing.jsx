import { FaCheckCircle } from "react-icons/fa";
const Pricing = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Starter</h3>
          <h1 className="text-3xl font-bold mt-3">$0<span className="text-sm">/month</span></h1>

          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Access to basic features</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Limited templates</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Community support</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Export in PDF</li>
          </ul>

          <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

    
        <div className="bg-gradient-to-b from-purple-700 to-pink-500 text-white p-6 rounded-xl shadow-lg scale-105">
          <h3 className="font-semibold">Pro</h3>
          <h1 className="text-3xl font-bold mt-3">$29<span className="text-sm">/month</span></h1>

          <ul className="mt-4 text-sm space-y-2">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Access to all premium tools</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Unlimited templates</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Priority support</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Advanced analytics</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Collaboration tools</li>
          </ul>

          <button className="w-full mt-6 bg-white text-purple-600 py-2 rounded-full">
            Start Pro Trial
          </button>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Enterprise</h3>
          
          <h1 className="text-3xl font-bold mt-3">$99<span className="text-sm">/month</span></h1>

          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Everything in Pro</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Team collaboration</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Custom integrations</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> Dedicated support</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500 text-sm" /> SLA guarantee</li>
          </ul>

          <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;