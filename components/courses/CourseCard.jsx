"use client";

import Link from "next/link";

export default function CourseCard({ course, toSubscribe }) {
  // Truncate description to 150 characters
  const truncateDescription = (text) => {
    if (text.length <= 150) return text;
    return text.slice(0, 150) + "...";
  };

  return (
    <div className="card bg-base-100 w-full h-full flex flex-col shadow-sm rounded-lg overflow-hidden">
      <figure>
        <img
          src={course.thumbnail || "/default-course.jpg"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body flex flex-col flex-grow">
        <h2 className="card-title mx-3">
          {course.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="m-3 flex-grow">
          {truncateDescription(course.description)}
        </p>
        <div className="w-full mt-auto">
          <div className="flex items-center justify-between">
            {toSubscribe ? (
              <Link href={`/checkout/${course.id}`}>
                <span className="btn btn-outline btn-warning">
                  ₹ {course.price}
                </span>
              </Link>
            ) : null}
            <div className="card-actions">
              {/* <button className="btn btn-secondary">Demo</button> */}
              <Link
                href={
                  toSubscribe
                    ? `/checkout/${course.id}`
                    : `/courses/${course.id}`
                }
              >
                <button className="btn btn-success">
                  {toSubscribe ? (
                    <span>Enroll Now</span>
                  ) : (
                    <span>Let's Study</span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
