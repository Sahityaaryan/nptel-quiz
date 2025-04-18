export function CourseCard({ course }) {
    return (
      <div className="card w-full bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{course.title}</h2>
          <p className="text-gray-700">{course.description}</p>
        </div>
      </div>
    );
  }
  