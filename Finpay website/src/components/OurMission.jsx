export default function MissionStats() {
    return (
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Mission Statement */}
          <div className="mb-12 md:mb-16">
            <div className="text-teal-600 uppercase text-sm font-medium tracking-wide mb-3">
              OUR MISSION
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We've helped<br />
              innovative companies
            </h2>
            
            <p className="text-gray-600 max-w-md mx-auto">
              Hundreds of all sizes and across all industries 
              have made a big improvements with us.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Revenue business */}
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                24%
              </div>
              <div className="text-gray-600">
                Revenue business
              </div>
            </div>
            
            {/* Annual revenue */}
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                180K
              </div>
              <div className="text-gray-600">
                In annual revenue
              </div>
            </div>
            
            {/* Runway */}
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                10+
              </div>
              <div className="text-gray-600">
                Months of runway
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }