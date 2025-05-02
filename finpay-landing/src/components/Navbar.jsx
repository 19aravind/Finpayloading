import React from 'react';

function Navbar() {
    return (
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Finpay Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800">Finpay</span>
          </div>
  
          {/* Navigation links (optional) */}
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="text-gray-600 hover:text-gray-900">
              Products
            </a>
            <a href="#customers" className="text-gray-600 hover:text-gray-900">
              Customers
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#learn" className="text-gray-600 hover:text-gray-900">
              Learn
            </a>
          </div>
  
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  