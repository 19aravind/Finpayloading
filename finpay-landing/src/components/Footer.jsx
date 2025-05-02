import React from 'react';

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <h3 className="text-xl font-semibold mb-4 md:mb-0">
              Ready to level up your payment process?
            </h3>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                Get Started Now
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Small businesses</li>
                <li>Freelancers</li>
                <li>Customers</li>
                <li>Taxes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Guides</li>
                <li>Templates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow us</h4>
              <div className="flex space-x-4 text-gray-400">
                <i className="fab fa-twitter hover:text-white cursor-pointer"></i>
                <i className="fab fa-facebook hover:text-white cursor-pointer"></i>
                <i className="fab fa-linkedin hover:text-white cursor-pointer"></i>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            © Finpay 2025. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  