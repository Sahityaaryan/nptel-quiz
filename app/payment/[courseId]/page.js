import { fetchCourse } from "@/app/lib/actions";
import PaymentPage from "@/components/payment/PaymentPage";

export default async function PaymentInterface({ params }) {
  const { courseId } = await params;
  const course = await fetchCourse(courseId);

  return (
    <>
      <PaymentPage course={course} />
    </>
  );
}
