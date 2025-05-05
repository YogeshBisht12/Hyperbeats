import { useLocation } from 'react-router-dom';

const TrackOrderPage = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Order Tracking</h2>
        <p className="text-lg text-gray-700">Thank you, <strong>{state?.name}</strong>!</p>
        <p className="mt-2 text-sm text-gray-600">Your order <strong>{state?.orderId}</strong> is being prepared.</p>
        <p className="mt-4 text-gray-500">Delivery Address: {state?.address}</p>
        <div className="mt-6">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
            🕐 Status: Preparing your food
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
