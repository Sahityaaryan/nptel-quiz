import {
  fetchCourse,
  fetchSubTopics,
  getQuizBySubtopicId,
} from "@/app/lib/actions";
import Link from "next/link";
import { getUserSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
// import SubtopicsList from "@/components/SubtopicsList"; // Adjust path as needed
import SubtopicsList from "@/components/courses/SubtopicsList";

export default async function CourseDetail({ params }) {
  const { courseId } = await params;

  const user = await getUserSession();
  const userId = user?.id;
  if (!userId) redirect("/login");

  const course = await fetchCourse(courseId);
  if (!course) throw new Error("Course not found");

  const subtopics = await fetchSubTopics(courseId);

  // Preprocess quizzes for each subtopic
  const subtopicsWithQuiz = await Promise.all(
    subtopics.map(async (subtopic) => {
      const quiz = await getQuizBySubtopicId(subtopic.id);
      const recentAttempt = quiz?.attempts?.at(-1) ?? null;
      const attemptedQuestions = recentAttempt?.answers?.length ?? 0;
      const questions = quiz?.questions ? JSON.parse(quiz.questions) : [];
      const totalQuestions = questions.length || 100;

      return {
        ...subtopic,
        quizId: quiz?.id,
        attemptedQuestions,
        totalQuestions,
      };
    }),
  );

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-5xl py-10 px-4">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>{course.title}</li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-8">{course.title}</h1>

        <div className="card bg-base-100 shadow-xl p-6">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-84 object-cover object-center rounded-lg mb-4"
          />
          <p className="text-base text-base-content mb-4">
            {course.description}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Course Content
            </h2>
            <p className="text-base text-base-content">
              Welcome to {course.title}! This course includes videos, quizzes,
              and projects.
            </p>
          </div>

          <SubtopicsList courseId={courseId} subtopics={subtopicsWithQuiz} />
        </div>
      </div>
    </div>
  );
}
