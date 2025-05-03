import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <div className="bg-teal-900 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <div className="text-teal-400 uppercase text-sm font-medium mb-3">
            TRY IT NOW
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to level up your<br className="hidden md:block" />
            payment process?
          </h2>
          
          <p className="text-teal-100/80 max-w-lg">
            Supports small businesses with simple invoicing, powerful
            integrations, and cash flow management tools.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 transition-colors text-white px-6 py-3 rounded-lg">
            Get Started Now
          </button>
          
          <button className="border border-teal-600 hover:border-teal-400 transition-colors text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
            Learn More
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}