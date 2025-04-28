import { getUserSession } from "../lib/session";
import { redirect } from "next/navigation";
import { getSubscribedCourses, getUserId } from "@/app/lib/actions";
import Link from "next/link";
import CourseCard from "@/components/courses/CourseCard";

export default async function RevisionHubPage() {
  const user = await getUserSession();
  if (!user) {
    redirect("/login");
  }

  const truncateDescription = (text) => {
    if (text.length <= 150) return text;
    return text.slice(0, 150) + "...";
  };

  const userId = await getUserId(user);
  const courses = await getSubscribedCourses({ userId });

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm breadcrumbs mb-4">
        <ul className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link href="/" className=" hover:underline">
              {/* <Home className="inline-block w-4 h-4 mr-1" /> */}
              Home
            </Link>
          </li>
          <li className="text-base-content/70">Revision Hub</li>
        </ul>
      </nav>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Revision Hub</h1>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/courses" className="btn btn-outline btn-primary">
            My Courses
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <Link href={`/revision-hub/${course.id}`} key={course.id}>
              <div className="card bg-base-100 w-full h-full flex flex-col shadow-sm rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-10">
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
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex flex-col w-screen md:w-[60vw] items-center justify-center gap-4 min-h-[50vh]">
            <p className="text-center text-gray-500 text-lg font-medium">
              No subscribed courses yet.
            </p>

            <Link href="/all-courses">
              <button className="px-6 py-2 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-all duration-200">
                Explore Courses
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
