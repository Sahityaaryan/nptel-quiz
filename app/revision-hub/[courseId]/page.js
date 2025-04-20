// app/revision-hub/[courseId]/page.js
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SubtopicRevision from "@/components/revision-hub/SubtopicRevision";
import prisma from "@/app/lib/prisma";
import Link from "next/link";
import { getUserSession } from "@/app/lib/session";
import { fetchSubtopicUsingCourseId } from "@/app/lib/actions";

export default async function CourseRevisionPage({ params }) {
  // const session = await getSession();
  const user = getUserSession();

  if (!user) {
    redirect("/login");
  }

  const { courseId } = await params;

  // Fetch course details and subtopics
  const course = await fetchSubtopicUsingCourseId({ courseId });

  if (!course || course.subscriptions.length === 0) {
    redirect("/revision-hub");
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-primary">{course.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
          <div className="flex gap-3">
            <Link href="/revision-hub" className="btn btn-outline btn-primary">
              Back to Revision Hub
            </Link>
            <Link href="/courses" className="btn btn-outline btn-primary">
              My Courses
            </Link>
          </div>
        </div>
      </div>

      <SubtopicRevision courseId={courseId} subtopics={course.subtopics} />
    </div>
  );
}
