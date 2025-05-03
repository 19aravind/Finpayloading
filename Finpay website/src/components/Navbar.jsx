import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
        <img src="/finpay-logo.svg" alt="Finpay" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold text-gray-900">Finpay</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900">Products</a>
          <a href="#" className="hover:text-gray-900">Customers</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Learn</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium hover:bg-teal-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
