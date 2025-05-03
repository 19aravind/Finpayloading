import { ArrowUpRight } from "lucide-react";

export default function PricingPlans() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          CHOOSE PLAN:
        </h2>
      </div>
      
      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plus Plan */}
        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-16">Plus</h3>
            <div className="text-xl font-semibold text-gray-800">£2.99/month</div>
          </div>
          <div className="absolute bottom-8 right-8">
            <ArrowUpRight className="text-gray-400 group-hover:text-gray-700 transition-colors" />
          </div>
        </div>
        
        {/* Premium Plan */}
        <div className="bg-teal-500 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
          <div>
            <h3 className="text-3xl font-bold text-white mb-16">Premium</h3>
            <div className="text-xl font-semibold text-white">£6.99/month</div>
          </div>
          <div className="absolute bottom-8 right-8">
            <ArrowUpRight className="text-white/70 group-hover:text-white transition-colors" />
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-teal-400/20 -skew-y-6 translate-y-24 transform-gpu"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-teal-400/10 -skew-y-6 translate-y-32 transform-gpu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}