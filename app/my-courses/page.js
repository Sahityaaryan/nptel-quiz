export default async function MyCourses() {
    const session = await getSession();
    if (!session) redirect('/login');
  
    const subscribedCourses = await fetchSubscribedCourses(session.user.id);
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subscribedCourses.map(course => (
            <div key={course.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <progress className="progress progress-primary" value={course.progress} max="100"></progress>
                <p>{course.progress}% completed</p>
                <button className="btn btn-primary">Continue</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }