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
                  <h2 className="card-title text-xl font-semibold text-secondary">
                    {course.title}
                  </h2>
                  <p className="text-base text-base-content/80 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/all-courses `}
                      className="btn btn-outline btn-accent btn-sm hover:btn-accent"
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
            <a href="/" className="text-2xl font-bold text-accent">
              Quiz Masalaa
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Admin Links */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Admin
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link
                    href="/admin/courses/new"
                    className="hover:text-accent transition-colors"
                  >
                    Add Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/quizzes/new"
                    className="hover:text-accent transition-colors"
                  >
                    Add Quizzes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/subtopics/new"
                    className="hover:text-accent transition-colors"
                  >
                    Add Subtopics
                  </Link>
                </li>

                <li>
                  <Link
                    href="/admin/subscribe/new"
                    className="hover:text-accent transition-colors"
                  >
                    Subscribe
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Links - Person 1 (Developer) */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Developer's Socials
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/Sahityaaryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Sahitya's GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.28 1.08 2.84.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.92 0-1.08.38-1.97 1.01-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.63.69 1.01 1.58 1.01 2.66 0 3.82-2.33 4.67-4.56 4.92.36.31.67.94.67 1.9v2.81c0 .27.16.58.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sahityaaryan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Sahitya's LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Social Media Links - Person 2 */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Founder's Socials
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/Nauser-Alam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Nauser's GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.28 1.08 2.84.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.92 0-1.08.38-1.97 1.01-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.63.69 1.01 1.58 1.01 2.66 0 3.82-2.33 4.67-4.56 4.92.36.31.67.94.67 1.9v2.81c0 .27.16.58.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nauser-alam-a0401a265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Nauser's LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-sm">© 2025 Quiz Masalaa. All rights reserved.</p>
          <div className="text-right text-sm text-base-content/70 mt-2">
            <p className="text-sm text-gray-500 flex items-center gap-1 justify-end">
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
              by Sahitya & John
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
