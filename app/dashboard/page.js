

import { redirect } from 'next/navigation';
import { getUserSession } from '../lib/session';
import { fetchUserStats } from '../lib/actions';

export default async function Dashboard() {
 
  
  const user = await getUserSession();

  console.log('dashboard user : ', user);
  if (!user) redirect('/login');

  // const userStats = await fetchUserStats(user.id); // Assume function
  const userStats = {subscribedCourses:3, quizzesCompleted:4}

  return (
    <div className="p-4 flex-col">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
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