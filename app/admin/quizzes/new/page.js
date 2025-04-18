import { getUserSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import QuizForm from '@/components/admin/QuizForm';
import prisma from '@/app/lib/prisma';

export default async function NewQuizPage() {
//   const session = await auth();
  const user = await getUserSession();
  // console.log("[quizzes]: ", user);
  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

const courses = await prisma.course.findMany({
  select: { id: true, title: true },
});

return (
  <div className="container mx-auto py-8">
    <QuizForm courses={courses} />
  </div>
);
}
