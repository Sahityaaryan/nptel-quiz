

import AllCourses from "@/components/courses/AllCourses";
import { fetchAllCourses } from "../lib/actions";
// import MyCourses from "../all-courses/page";
import MyCourses from "@/components/courses/MyCourses";


export default async function CoursesPage() {
    const courses = await fetchAllCourses(); // Server-side fetch

    return (
      <MyCourses courses={courses}/>
    );
  }