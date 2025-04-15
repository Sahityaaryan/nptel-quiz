'use client';
import { useState } from 'react';

export default function SubscriptionCheckout({ course }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // Logic to initiate Razorpay payment
    await loadRazorpay(course);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{course.title}</h2>
          <p>Price: ${course.price}</p>
          <button className="btn btn-primary" onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : 'Subscribe Now'}
          </button>
        </div>
      </div>
    </div>
  );
}