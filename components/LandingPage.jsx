import { fetchAllCourses } from "@/app/lib/actions";
import Link from "next/link";

export default async function LandingPage() {
  const featuredCourses = await fetchAllCourses();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero relative rounded-lg  text-neutral-content overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />{" "}
        {/* Subtle overlay */}
        <div className="hero-content flex-col text-center py-20 z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Welcome to <span className="text-accent">Quiz Masalaa</span>
          </h1>
          <p className="mb-6 text-lg sm:text-xl max-w-2xl">
            Your last-minute tuition platform. Learn quickly. Learn smartly.
          </p>
          <a
            href="/all-courses"
            className="btn btn-accent btn-lg hover:btn-accent-focus transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="px-4 sm:px-6 py-12 bg-base-100 flex-grow">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Featured Courses
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 mt-2">
            Hand-picked gems to boost your prep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredCourses.length === 0 ? (
            <div className="col-span-full text-center text-lg text-base-content/70">
              No featured courses available at the moment.
            </div>
          ) : (
            featuredCourses.map((course) => (
              <div
                key={course.id}
                className="card bg-base-200 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                {course.thumbnail && (
                  <figure>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title text-xl font-semibold text-primary">
                    {course.title}
                  </h2>
                  <p className="text-base text-base-content/80 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/all-courses `}
                      className="btn btn-outline btn-primary btn-sm hover:btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-base-200 text-base-content relative">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-4">
            <a href="/" className="text-2xl font-bold text-primary">
              Quiz Masalaa
            </a>
          </div>
          {/* Commented out links section */}
          {/*
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/courses" className="hover:text-primary">Courses</a></li>
                <li><a href="/about" className="hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="/support" className="hover:text-primary">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" className="hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                </a>
                <a href="https://facebook.com" className="hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          */}
          <p className="text-sm">© 2025 Quiz Masalaa. All rights reserved.</p>
          <div className="text-right text-sm text-base-content/70 mt-2">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-400"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              by Sahitya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
