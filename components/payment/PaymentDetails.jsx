
'use client';
import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import { getUserSession } from '@/app/lib/session';
import { useRouter } from 'next/navigation';
import { createRazorpayOrder, verifyAndSubscribe } from '@/app/lib/actions';

export default function PaymentDetails({ course , user}) {
//   const { data: session } = useSession();
 
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 

  // Fetch Razorpay order on mount
//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         setLoading(true);
//         const amount = Math.round(course.price * 100); // Convert to paise
//         const order = await createRazorpayOrder({ amount, currency: 'INR' });
//         setOrderId(order.id);
//       } catch (err) {
//         setError('Failed to initialize payment. Please try again.');
//         console.error('Error fetching order:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrder();
//   }, [course.price]);

//   const handlePayment = () => {
//     if (!orderId) {
//       setError('Payment not ready. Please wait or refresh.');
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use env variable
//       amount: Math.round(course.price * 100), // In paise
//       currency: 'INR',
//       name: 'Quiz Masalaa',
//       description: `Purchase of ${course.title}`,
//       image: 'https://your-logo-url.com/logo.png', // Replace with your logo
//       order_id: orderId,
//       handler: async function (response) {
//         try {
//           setLoading(true);
//           const verification = await verifyAndSubscribe({
//             paymentId: response.razorpay_payment_id,
//             orderId: response.razorpay_order_id,
//             signature: response.razorpay_signature,
//             userId: user?.id,
//             courseId: course.id,
//           });
//           setSuccess('Payment successful! Redirecting to your course...');
//           setTimeout(() => {
//             router.push(`/courses/${course.id}`);
//           }, 2000);
//         } catch (err) {
//           setError('Payment verification failed. Please contact support.');
//           console.error('Verification error:', err);
//         } finally {
//           setLoading(false);
//         }
//       },
//       prefill: {
//         name: user?.name || '',
//         email: user?.email || ''
//       },
//       theme: {
//         color: '#3b82f6', // Tailwind blue-500
//       },
//     };

//     const rzp = new window.Razorpay(options);

//     rzp.on('payment.failed', function (response) {
//       setError(`Payment failed: ${response.error.description}`);
//       console.error('Payment Failed:', response);
//     });
//     rzp.open();
//   };

// console.log("orderid: ", orderId, " loading: ", loading, " success: ", success)

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Payment Details</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">Course Price:</span>
          <span className="text-xl font-bold text-success">&#x20b9;{course.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-base-content">
          Pay securely with Razorpay. Choose from cards, UPI, netbanking, or wallets.
        </p>
        {/* {success && (
          <div className="alert alert-success">
            <svg
              className="w-6 h-6 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{success}</span>
          </div>
        )} */}

        {/* {error && (
          <div className="alert alert-error">
            <svg
              className="w-6 h-6 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )} */}
        <button
          className="btn btn-primary w-full"
        //   onClick={handlePayment}
        //   disabled={loading || !orderId || success}  // this thing is correct but need some notifications

        >
          {loading ? 'Processing...' : 'Pay with Razorpay'}
          {/* <button className="btn btn-primary">Pr/imary</button> */}
            {/* Pay with Razorpay */}
        </button>
        <div className="alert alert-info">
          <svg
            className="w-6 h-6 text-info"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Powered by Razorpay, India's leading payment gateway.</span>
        </div>
      </div>
    </div>
  );
}