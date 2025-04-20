import AllCourses from "@/components/courses/AllCourses";
import { getSubscribedCourses, getUserId } from "../lib/actions";
// import MyCourses from "../all-courses/page";
import MyCourses from "@/components/courses/MyCourses";
import { getUserSession } from "../lib/session";
export default async function CoursesPage() {
  const user = await getUserSession();
  const userId = await getUserId(user);
  const courses = await getSubscribedCourses({ userId }); // Server-side fetch

  return <MyCourses courses={courses} />;
}
