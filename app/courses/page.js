

import { fetchAllCourses } from '@/lib/actions';


export default async function CoursesPage() {
    const courses = await fetchAllCourses(); // Server-side fetch
    return (
      <div>
        <div className="flex justify-between items-center p-4">
          <input type="text" placeholder="Search courses" className="input input-bordered w-full max-w-xs" />
          <select className="select select-bordered w-full max-w-xs">
            <option>Filter by category</option>
            {/* Options */}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {courses.map(course => (
            <div key={course.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Course</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }