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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {courses.length > 0 ? (
          courses.map((course) => (
            <Link key={course.id} href={`/revision-hub/${course.id}`}>
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src={course.thumbnail} alt={course.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-3">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="m-3">{course.description}</p>
                  <div className="w-full"></div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-base-content col-span-full">
            No subscribed courses found. Explore courses to get started!
          </p>
        )}
      </div>
    </div>
  );
}
