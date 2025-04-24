import AllCourses from "@/components/courses/AllCourses";
import { fetchAllCourses } from "../lib/actions";
import Signature from "@/components/ui/Signature";

export default async function Page() {
  const courses = await fetchAllCourses();

  // console.log("subscribedCourses: ", subscribedCourses);

  return (
    <>
      <AllCourses courses={courses} />

      <Signature />
    </>
  );
}
