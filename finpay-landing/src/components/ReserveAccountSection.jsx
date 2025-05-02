import React from 'react';

function ReserveAccountSection() {
    return (
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Maximize your returns with a Reserve account that generates.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Open your account</h3>
              <p className="text-gray-300">
                Sign up to instantly set up your account from the dashboard.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Transfer your money</h3>
              <p className="text-gray-300">
                Move money from another account into your account to start earning up.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Watch your balance grow</h3>
              <p className="text-gray-300">
                Access invested assets and see returns from market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ReserveAccountSection;
  