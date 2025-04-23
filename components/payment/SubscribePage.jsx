"use client";

import { useState } from "react";
import { subscribeUserToCourse } from "@/app/lib/payments/actions";

export default function SubscribeUser() {
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("courseId", courseId);

    const result = await subscribeUserToCourse(formData);

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      setEmail("");
      setCourseId("");
    } else {
      setMessage({ type: "error", text: result.error });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Subscribe User to Course</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter the user&apos;s email and course ID to grant access.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter user email"
                className="input input-bordered"
                required
                disabled={loading}
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Course ID</span>
              </label>
              <input
                type="text"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                placeholder="Enter course ID"
                className="input input-bordered"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe User"}
            </button>
          </form>
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
              Ensure the email and course ID are correct. Contact{" "}
              <a
                href="mailto:work.sahityaaryan@gmail.com"
                className="link link-primary"
              >
                work.sahityaaryan@gmail.com
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
