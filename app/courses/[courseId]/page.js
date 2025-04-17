

// import { fetchCourse, fetchSubtopics } from "@/app/lib/actions";
import { fetchCourse, fetchSubTopics, getQuizBySubtopicId } from "@/app/lib/actions";
import Link from "next/link";

export default async function CourseDetail({ params }) {

  const {courseId} = await params;
  // console.log("slug: ", slug);
    // console.log("parmas: ", params)
    const course = await fetchCourse(courseId);
    const subtopics = await fetchSubTopics(courseId);

    // console.log("subtoipics: ", subtopics);
    
    // const quiz = await getQuizBySubtopicId();
    // console.log("[fetched quiz]: ", quiz);
    

    // subtopicId -> id (Quiz) -> use that as quiz id to get the answers JSON size
    // total number of questions -> questions.size (Quiz)
    // attempted -> answers.size() (QuizAttempt)

    // return <div>Jai Mata Di</div>;
  
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


        


        <ul className="list bg-base-100 rounded-box shadow-md">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Subtopics</li>

          {subtopics.map(async (subtopic)=>{

              const quiz = await getQuizBySubtopicId(subtopic.id);

              const attemptsArray = quiz.attempts;
              // const attemptsArray = JSON.parse(quiz.attempts);

              
              const recentAttempt = (attemptsArray) ? (attemptsArray[attemptsArray.length -1]):null;
              
              const attemptedQuestions =(recentAttempt) ? recentAttempt.answers.length:0;
              // console.log("attemparray: ", recentAttempt.answers);

              // console.log("quiz: ", quiz.questions);
              // console.log("[course page quiz:] ", quiz.questions?.length);

              const questions = JSON.parse(quiz.questions);
              

              const totalQuestions =(questions)? questions.length:100;

              

              return (
                <li className="list-row">
                

                <div>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1 size-8 rounded-box"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-bold uppercase">
                  {subtopic.title}

                    </span>
                  </div>
                  <div className="text-xs uppercase font-semibold opacity-60">Quiz</div>
                </div>
            
                <div className="flex items-center">
            
                <progress className="progress progress-secondary w-56" value={attemptedQuestions} max={totalQuestions}></progress>
            
                <Link href={`/courses/${courseId}/quiz/${subtopic.id}`}>
                            <button className="btn btn-square btn-ghost">

                              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>

                            </button>
                            </Link>
                
            
                </div>
              </li>
              );

          })}
  
  
</ul>




      </div>
    );
  }

  // <progress className="progress progress-secondary w-56" value="70" max="100"></progress>


  // 
  
  
//   <li className="list-row">
//   <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
//   <div>
//     <div>Ellie Beilish</div>
//     <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
//   </div>
//   <button className="btn btn-square btn-ghost">
//     <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
//   </button>
//   {/* <button className="btn btn-square btn-ghost">
//     <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
//   </button> */}
// </li>

// <li className="list-row">
//   <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
//   <div>
//     <div>Sabrino Gardener</div>
//     <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
//   </div>

//   <div className="flex items-center">

//   <progress className="progress progress-secondary w-56" value="70" max="100"></progress>

//   <button className="btn btn-square btn-ghost">
//     <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
//   </button>
  

//   </div>
// </li>

