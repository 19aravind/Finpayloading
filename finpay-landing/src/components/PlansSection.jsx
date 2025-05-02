import React from 'react';

function PlansSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Choose a plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Plus</h3>
              <p className="text-3xl font-bold mb-4">£2.99<span className="text-base font-normal">/month</span></p>
              <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-lg shadow text-center text-white">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-3xl font-bold mb-4">£6.99<span className="text-base font-normal">/month</span></p>
              <button className="mt-4 px-6 py-2 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default PlansSection;
  