"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { submitTransactionId } from "@/actions/payment";
import { submitTransactionId } from "@/app/lib/payments/actions";
import Image from "next/image";

export default function PaymentPage({ course }) {
  const router = useRouter();
  // const searchParams = useSearchParams();

  const courseId = course.id;
  const courseTitle = course.title;
  const amount = parseFloat(course.price);

  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("transactionId", transactionId);
    formData.append("courseId", courseId);
    formData.append("amount", amount);

    const result = await submitTransactionId(formData);

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      setTimeout(() => router.push("/courses"), 3000);
    } else {
      setMessage({ type: "error", text: result.error });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">
            Complete Payment for {courseTitle}
          </h2>
          <p className="text-lg mb-4">
            Amount: <strong>₹{amount.toFixed(2)}</strong>
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Step 1: Scan QR Code</h3>
            <p className="text-sm text-gray-600 mb-4">
              Use any UPI app (BHIM, PhonePe, Google Pay, etc.) to scan the QR
              code below and pay ₹{amount.toFixed(2)}.
            </p>
            <div className="flex justify-center">
              <Image
                src="/payment/qr-code.jpeg" // Replace with your UPI QR code
                alt="UPI QR Code"
                width={200}
                height={200}
                className="border border-gray-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Enter Transaction ID
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              After payment, enter the 12-digit Transaction ID (UTR) from your
              UPI app.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Transaction ID</span>
                </label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter 12-digit Transaction ID"
                  className="input input-bordered"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 w-full"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Submit Payment"}
              </button>
            </form>
          </div>
          {message && (
            <div
              className={`alert ${
                message.type === "success" ? "alert-success" : "alert-error"
              } mt-4`}
            >
              <span>{message.text}</span>
            </div>
          )}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600">
              If you face issues or the Transaction ID is not verified, email a
              screenshot of your payment to{" "}
              <a
                href="mailto:work.sahityaaryan@gmail.com"
                className="link link-primary"
              >
                {"work.sahityaaryan@gmail.com"}
              </a>
              . Include your email, course title, and Transaction ID.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
