
    import PaymentDetails from "@/components/payment/PaymentDetails";
    import UserInfo from "@/components/payment/UserInfo";
    import SelectedCourse from "@/components/payment/SelectedCourse";
import { fetchCourse } from "@/app/lib/actions";
import { getUserSession } from "@/app/lib/session";

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
    const {courseId} = await params;
    // const data = 
    // const course = await getCourseData(courseId);
    const course = await fetchCourse(courseId);
    const user = await getUserSession();

    return (
        <div className="container mx-auto max-w-5xl py-10 px-4">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2 space-y-6">
            <UserInfo user={user}/>
            <PaymentDetails course={course} user={user} />
          </div>
          {/* Right Column: Course Summary */}
          <div className="lg:col-span-1">
            <SelectedCourse course={course} />
          </div>
        </div>
      </div>
    );
    }