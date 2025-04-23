import AllCourses from "@/components/courses/AllCourses";
import { getSubscribedCourses, getUserId } from "../lib/actions";
// import MyCourses from "../all-courses/page";
import MyCourses from "@/components/courses/MyCourses";
import { getUserSession } from "../lib/session";
export default async function CoursesPage() {
  const user = await getUserSession();
  const userId = await getUserId(user);
  const courses = await getSubscribedCourses({ userId }); // Server-side fetch

  return (
    <>
      <MyCourses courses={courses} />
      <div className="text-center text-sm text-base-content/70 mt-2">
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
    </>
  );
}
