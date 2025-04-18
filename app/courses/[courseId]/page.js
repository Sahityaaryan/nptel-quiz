// import { fetchCourse, fetchSubtopics } from "@/app/lib/actions";
import { fetchCourse, fetchSubTopics, getQuizBySubtopicId, fetchSubscription } from "@/app/lib/actions";
import Link from "next/link";
import { getUserSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export default async function CourseDetail({ params }) {
  const { courseId } = await params;
  const user = await getUserSession();
  const userId = user.id;
  if (!userId) redirect('/login');
  const course = await fetchCourse(courseId);

  if (!course) {
    throw new Error('Course not found');
  }

  const subtopics = await fetchSubTopics(courseId);

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-5xl py-10 px-4">

        {/* breadcrumbs */}

        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li>{course.title}</li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-8">{course.title}</h1>
        <div className="card bg-base-100 shadow-xl p-6">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-84 object-cover object-center rounded-lg mb-4" // Increased height to h-64 and added object-center
          />
          <p className="text-base text-base-content mb-4">{course.description}</p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Course Content</h2>
            <p className="text-base text-base-content">
              Welcome to {course.title}! This course includes videos, quizzes, and projects.
            </p>
          </div>

          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"><u>Subtopics</u></li>
            {subtopics.map(async (subtopic, index) => {
              const quiz = await getQuizBySubtopicId(subtopic.id);
              const attemptsArray = quiz.attempts;
              const recentAttempt = attemptsArray ? attemptsArray[attemptsArray.length - 1] : null;
              const attemptedQuestions = recentAttempt ? recentAttempt.answers.length : 0;
              const questions = JSON.parse(quiz.questions);
              const totalQuestions = questions ? questions.length : 100;

              return (
                <li className="list-row flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2 md:mb-0">
                    {/* <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1 size-8 rounded-box mr-2"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg> */}
                    <div>
                      <div className="flex items-center">
                        <span className="font-bold uppercase text-sm md:text-base w-full break-words md:break-normal">
                          {index + 1}. {subtopic.title}
                        </span>
                      </div>
                      <div className="text-xs uppercase font-semibold opacity-60">Quiz</div>
                    </div>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row items-center mt-2 md:mt-0">
                    <progress
                      className="progress progress-secondary w-full md:w-56 mb-2 md:mb-0 mr-0 md:mr-2"
                      value={attemptedQuestions}
                      max={totalQuestions}
                    />
                    <Link href={`/courses/${courseId}/quiz/${subtopic.id}`}>
                      <button className="btn btn-square btn-ghost">
                        <svg
                          className="size-[1.2em]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M6 3L20 12 6 21 6 3z"></path>
                          </g>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}