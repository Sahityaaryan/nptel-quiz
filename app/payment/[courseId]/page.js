import { fetchCourse } from "@/app/lib/actions";
import PaymentPage from "@/components/payment/PaymentPage";
import { getUserSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import Signature from "@/components/ui/Signature";

export default async function PaymentInterface({ params }) {
  const { courseId } = await params;
  const course = await fetchCourse(courseId);
  const user = await getUserSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <PaymentPage user={user} course={course} />
      <Signature />
    </>
  );
}
