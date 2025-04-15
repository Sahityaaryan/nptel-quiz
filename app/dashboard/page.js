import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { fetchUserStats } from '../lib/actions';

export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect('/login');

  const userStats = await fetchUserStats(session.user.id); // Assume function

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome, {session.user.name}</h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Courses Subscribed</div>
          <div className="stat-value">{userStats.subscribedCourses}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Quizzes Completed</div>
          <div className="stat-value">{userStats.quizzesCompleted}</div>
        </div>
      </div>
    </div>
  );
}