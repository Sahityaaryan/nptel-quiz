'use client';
import { useState } from 'react';
import { courseCategory } from '@/data/category';
import CourseCard from './CourseCard';

export default function AllCourses({courses}){

    const [selectedCategory, setSelectedCategory] = useState("all_courses");


        return (
          <div>
            <div className="flex justify-between items-center p-4">
              <input type="text" placeholder="Search courses" className="input input-bordered w-full max-w-xs" />
              <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              >
                <option value="all_courses" >All Courses</option>
                {courseCategory.map((category)=>{
                    return (<option key={category.value} value={category.value}>{category.title}</option>);
                })}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {courses.filter((course)=> (selectedCategory !== 'all_courses') ? (course.category == selectedCategory):true).map(course => (
               <CourseCard key={course.id} course={course}/>


              ))}
            </div>
          </div>
        );
}