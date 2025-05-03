export default function MaximizeReturns() {
  return (
    <div className="bg-teal-900 text-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="text-teal-400 uppercase text-sm tracking-wider mb-3">STEP</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Maximize your returns with a<br />
            Reserve account that generates.
          </h2>
        </div>
        
        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-teal-800/50 rounded-lg p-8">
            <div className="text-6xl font-bold text-teal-600/30 mb-6">1</div>
            <h3 className="text-xl font-semibold mb-3">Open your account</h3>
            <p className="text-teal-100/80">
              Sign up to Finpay and set up your account from the dashboard.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-teal-800/50 rounded-lg p-8">
            <div className="text-6xl font-bold text-teal-600/30 mb-6">2</div>
            <h3 className="text-xl font-semibold mb-3">Transfer your money</h3>
            <p className="text-teal-100/80">
              Move money from a another account into and start to earning up.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-teal-800/50 rounded-lg p-8">
            <div className="text-6xl font-bold text-teal-600/30 mb-6">3</div>
            <h3 className="text-xl font-semibold mb-3">Watch your balance grow</h3>
            <p className="text-teal-100/80">
              Accessed instantly and remain insulated from market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}