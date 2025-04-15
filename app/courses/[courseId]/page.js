import { fetchCourse, fetchSubtopics } from "@/app/lib/actions";



export default async function CourseDetail({ params }) {
    const course = await fetchCourse(params.courseId);
    const subtopics = await fetchSubtopics(params.courseId);
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p>{course.description}</p>
        <div className="collapse collapse-arrow">
          {subtopics.map(subtopic => (
            <div key={subtopic.id} className="collapse-item">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">{subtopic.title}</div>
              <div className="collapse-content">
                <p>{subtopic.description}</p>
                <button className="btn btn-primary">Take Quiz</button>
                <button className="btn btn-secondary">View Notes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }