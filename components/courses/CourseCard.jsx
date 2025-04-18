import Link from "next/link";

export default function CourseCard({course , toSubscribe}) {

    // console.log("course: ", course);


    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={course.thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-3">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="m-3" >{course.description}</p>
               <div className="w-full">
                {/* <"> */}
               {/* <span className="btn btn-outline btn-warning"> &#x20b9; {course.price}</span> */}
               { (toSubscribe) ?  <span className="btn btn-outline btn-warning"> &#x20b9; {course.price}</span>: null}
                {/* </div> */}
               <div className="card-actions justify-end">
                <button className="btn btn-secondary">Demo</button>
                <Link href={toSubscribe ? `/checkout/${course.id}` :`/courses/${course.id}`}><button className="btn btn-success">{(toSubscribe) ? <span>Enroll Now</span>: <span> Let's Study</span>}</button></Link>
                    
                </div>
               </div>
            </div>
        </div>
    );
}