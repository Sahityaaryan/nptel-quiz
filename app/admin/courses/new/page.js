// import { auth } from '@/app/api/auth/[...nextauth]/route';
import { getUserSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import CourseForm from '@/components/admin/CourseForm';

export default async function NewCoursePage() {

  const user = await getUserSession();
//   if (!user || user.role !== 'admin') {
//     redirect('/login');
//   }

  return (
    <div className="container mx-auto py-8">
      <CourseForm />
    </div>
  );
}