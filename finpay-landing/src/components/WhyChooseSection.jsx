import React from 'react';

function WhyChooseSection() {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why they prefer Finpay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-3xl font-bold mb-2">3k+</h3>
              <p className="text-gray-600">Businesses already running on Finpay</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-lg font-semibold mb-2">
                Instant Withdraw your funds at any time
              </h3>
              <div className="flex justify-center mb-2">
                <span className="text-4xl">💸</span>
              </div>
              <p className="text-gray-600">Access funds instantly to your bank account</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-lg font-semibold mb-2">No asset volatility</h3>
              <p className="text-gray-600">Generate secure returns without market swings or risks</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Summary</h3>
              <p className="text-gray-600">$1,876,580</p>
              <div className="h-24 bg-gray-200 mt-2 rounded">
                {/* Placeholder for chart */}
                <span className="block pt-8 text-gray-500">[Chart]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyChooseSection;
  