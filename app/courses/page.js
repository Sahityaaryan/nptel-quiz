

import AllCourses from "@/components/courses/AllCourses";
import { fetchAllCourses } from "../lib/actions";


export default async function CoursesPage() {
    const courses = await fetchAllCourses(); // Server-side fetch
    // console.log("[courses viewing all courses]: ", courses);

    return (
      <AllCourses courses={courses}/>
    );
  }