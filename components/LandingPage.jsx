
import { fetchFeaturedCourses } from "@/app/lib/actions";

 async function LandingPage() {
    const featuredCourses = await fetchFeaturedCourses(); 
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome to Quiz Masalaa</h1>
              <p className="py-6">Your last-minute tuition platform</p>
              <button className="btn btn-primary">
                Explore Courses
                </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {featuredCourses.map(course => (
            <div key={course.id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>&copy; 2025 Quiz Masalaa</p>
          </div>
        </footer>
      </div>
    );
  }

  export default LandingPage;