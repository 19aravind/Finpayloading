import { Building, ArrowRight } from "lucide-react";
import { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FinpayFeatures() {
  const [chartData] = useState([
    { name: 'Jan', value: 100000 },
    { name: 'Feb', value: 130000 },
    { name: 'Mar', value: 150000 },
    { name: 'Apr', value: 180000 },
    { name: 'May', value: 200000 },
    { name: 'Jun', value: 217658 }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-teal-600 text-sm font-medium mb-2">WHY US</div>
        <h2 className="text-3xl md:text-4xl font-bold">Why they prefer Finpay</h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3k+ Card */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="text-5xl font-bold text-teal-500 mb-6">3k+</div>
          <p className="text-gray-800 font-medium">
            Businesses already running<br />
            on Finpay
          </p>
        </div>

        {/* Instant Withdraw Card */}
        <div className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-1">
              Instant Withdraw your funds
            </h3>
            <p className="text-gray-600">at any time</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 6H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                <path d="M22 9v6"/>
                <path d="M2 9v6"/>
              </svg>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center">
              <Building className="text-white" />
            </div>
          </div>
        </div>

        {/* No asset volatility */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No asset volatility
            </h3>
            <p className="text-gray-600 text-sm">
              Consistent returns on your<br />
              cash reserves without making<br />
              any investments.
            </p>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-gray-50 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-sm text-gray-500">Summary</div>
              <div className="text-xl font-bold">$1,876,580</div>
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <span>6 Months</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#14B8A6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}