import React from 'react';

function ExperienceSection() {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Experience that grows with your scale.</h2>
          <div className="flex flex-col md:flex-row justify-around text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Free transfers</h3>
              <p className="text-gray-600">Create a financial experience easily and automate purchases.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Multiple account</h3>
              <p className="text-gray-600">Operate with various accounts and control spending.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Unmatched security</h3>
              <p className="text-gray-600">Securely manage your finances with encryption.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default ExperienceSection;
  