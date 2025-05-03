import { CreditCard, Building, Shield } from "lucide-react";

export default function FuturePayment() {
  return (
    <div className="bg-gray-50 p-8 md:p-12 rounded-xl max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div className="space-y-4 max-w-md">
          <div className="text-teal-600 font-medium text-sm uppercase tracking-wide">FUTURE PAYMENT</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience that grows with your scale.
          </h2>
        </div>
        
        <div className="max-w-md">
          <p className="text-gray-600">
            Design a financial operating system that works for your business and streamlined cash flow management
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free transfers */}
        <div className="space-y-4">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-lg">
            <CreditCard className="text-teal-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Free transfers</h3>
          <p className="text-gray-600 text-sm">
            Create a financial experience/pay and automate repeat purchases by scheduling recurring payments.
          </p>
        </div>

        {/* Multiple account */}
        <div className="space-y-4">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-lg">
            <Building className="text-teal-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Multiple account</h3>
          <p className="text-gray-600 text-sm">
            Run your operations with cash from your account and generate yield on funds stored in your account.
          </p>
        </div>

        {/* Unmatched security */}
        <div className="space-y-4">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-lg">
            <Shield className="text-teal-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Unmatched security</h3>
          <p className="text-gray-600 text-sm">
            Securely manage your finances with organization-wide MFA, card locking, and account-level controls.
          </p>
        </div>
      </div>
    </div>
  );
}