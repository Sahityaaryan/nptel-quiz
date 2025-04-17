import { getUserSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
// import SubtopicForm from '@/components/admin/SubtopicForm';
import SubtopicForm from '@/components/admin/SubTopicForm';
import prisma from '@/app/lib/prisma';

export default async function NewSubtopicPage() {
  // const session = await auth();
  const user = await getUserSession();
  // console.log("[subtopics]: ", user);
  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  const courses = await prisma.course.findMany({
    select: { id: true, title: true },
  });

  return (
    <div className="container mx-auto py-8">
      <SubtopicForm courses={courses} />
    </div>
  );
}