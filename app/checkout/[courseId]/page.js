import PaymentDetails from "@/components/payment/PaymentDetails";
import UserInfo from "@/components/payment/UserInfo";
import SelectedCourse from "@/components/payment/SelectedCourse";
import { fetchCourse } from "@/app/lib/actions";
import { getUserSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

// Simulated course data (replace with real fetch, e.g., prisma.course.findUnique)
// const getCourseData = async (courseId) => {
// return {
//     id: courseId || 'course-1',
//     title: 'Web Development Mastery',
//     price: 99.99,
//     description: 'Learn full-stack web development with hands-on projects.',
// };
// };

export default async function CourseCheckoutPage({ params }) {
  const { courseId } = await params;
  // const data =
  // const course = await getCourseData(courseId);
  const course = await fetchCourse(courseId);
  const user = await getUserSession();

  if (!user) redirect("/login");

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-6">
          <UserInfo user={user} />
          <PaymentDetails course={course} user={user} />
        </div>
        {/* Right Column: Course Summary */}
        <div className="lg:col-span-1">
          <SelectedCourse course={course} />
        </div>
      </div>

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
    </div>
  );
}
