import AllCourses from "@/components/courses/AllCourses";
import { fetchAllCourses } from "../lib/actions";
import { getUserSession } from "../lib/session";
import { redirect } from "next/navigation";

export default async function Page() {
  // const session = await getSession();
  const user = await getUserSession();
  if (!user) redirect("/login");

  const courses = await fetchAllCourses();

  // console.log("subscribedCourses: ", subscribedCourses);

  return <AllCourses courses={courses} />;
}
