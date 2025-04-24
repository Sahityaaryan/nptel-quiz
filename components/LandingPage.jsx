import { fetchAllCourses } from "@/app/lib/actions";
import { Footer } from "./ui/Footer";
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
      <Footer />
    </div>
  );
}
