"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentDetails({ course, user }) {
  const [error, setError] = useState("");
  if (!user?.id) {
    setError("Please sign in to purchase this course.");
    return;
  }

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">
        Payment Details
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">Course Price:</span>
          <span className="text-xl font-bold text-success">
            ₹{course.price.toFixed(2)}
          </span>
        </div>
        {/* <p className="text-sm text-base-content">
          Pay securely with Polar.sh. Choose from cards or other available
          methods.
        </p> */}
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
        {error && (
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
        )}
        <Link href={`/payment/${course.id}`}>
          <button className="btn btn-primary w-full">
            {"Confirm Purchase"}
          </button>
        </Link>
        {/* <div className="alert alert-info">
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
        <span>Powered by Polar.sh, a secure payment platform.</span>
        </div> */}
      </div>
    </div>
  );
}
