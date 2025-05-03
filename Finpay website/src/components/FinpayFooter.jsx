import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function FinpayFooter() {
  return (
    <footer className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-blue-900 rounded-sm mr-1"></div>
              <span className="text-blue-900 font-bold text-xl">Finpay</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium text-gray-800 mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Small Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Freelancers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Taxes</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Career</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Contact</a></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium text-gray-800 mb-3">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Ebooks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Templates</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-gray-600 mb-3">Follow us on</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-900">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-900">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">©Finpay 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}