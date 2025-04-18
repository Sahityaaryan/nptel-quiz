
'use client';
export default function SelectedCourse({ course }) {
  return (
    <div className="card bg-base-100 shadow-xl p-6 sticky top-4">
      <h2 className="text-xl font-semibold text-primary mb-4">Selected Course</h2>
      <div className="space-y-4">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-base-content">{course.description}</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">Price:</span>
          <span className="text-xl font-bold text-success">&#x20b9;{course.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}