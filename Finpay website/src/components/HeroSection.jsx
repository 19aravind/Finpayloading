import React from 'react';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between font-sans">
      
      {/* Left Section (skip if you only want the card) */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-4">
          Get paid early <br />
          save automatically <br />
          all your pay.
        </h1>
        <p className="text-gray-600 mb-6">
          Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:justify-start">
  <input
    type="email"
    placeholder="Your business email"
    className="px-4 py-2 w-full sm:w-auto rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm placeholder-gray-400"
  />
  <button className="bg-[#1BA9A5] text-white px-6 py-2 rounded-r-full hover:bg-[#168c89] transition text-sm font-medium border border-[#1BA9A5] sm:-ml-px flex items-center gap-1">
    Get Started <span aria-hidden="true">↗</span>
  </button>
</div>



<div className="flex gap-8 mt-6 justify-center sm:justify-start">
<img src="https://iolla.com/sites/default/files/styles/coh_x_large/public/2022-09/Klarna_Logo-update.jpg?itok=jBAqpxbw" alt="Klarna" className="h-5" />
<img src="https://thaka.bing.com/th/id/OIP.yGNRgAXuRUqoOdeD1274qAHaBU?rs=1&pid=ImgDetMain" alt="Coinbase" className="h-5" />
<img src="https://thaka.bing.com/th/id/OIP.jnYSF3-XyUAGPoQdW-yRggHaBW?w=550&h=100&rs=1&pid=ImgDetMain" alt="Instacart" className="h-5" />
</div>

      </div>

      {/* Right Card Section with Floating Credit Card */}
      <div className="md:w-1/2 flex justify-center relative">
        {/* Main Payment Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-80 relative">
          <div className="flex items-center mb-4">
            <div className="bg-[#d9f0f2] rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-[#0f3d4c] font-bold">D</span>
            </div>
            <div className="ml-3">
              <p className="font-semibold text-sm">Dipa Inhouse</p>
              <p className="text-xs text-gray-500">dipainhouse@gmail.com</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-xs">Invoice</p>
            <p className="text-3xl font-bold">$1,876,580</p>
            <p className="text-xs text-gray-500">April 21, 2024</p>
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between border rounded px-4 py-2 text-sm">
              <span>Credit Card</span>
              <input type="radio" checked readOnly className="accent-teal-600" />
            </div>
            <div className="flex items-center justify-between border rounded px-4 py-2 text-sm">
              <span>Bank Account</span>
              <input type="radio" readOnly className="accent-teal-600" />
            </div>
          </div>
          <button className="bg-[#0f3d4c] text-white w-full py-2 rounded font-semibold">
            Pay
          </button>

          {/* Floating Credit Card JOINED on top right */}
          <div className="absolute -top-10 right-4 w-32 h-48 bg-[#0f9fa8] rounded-xl shadow-lg p-4 flex flex-col justify-between text-white">
            <div>
              <p className="text-xs">Credit Card</p>
              <p className="text-lg font-semibold mt-2">234</p>
              <p className="text-sm mt-1">***** *****</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">VISA</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
