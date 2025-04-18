'use client'

import { useState } from 'react';
import { courseCategory } from '@/data/category';
import CourseCard from './CourseCard';

export default function MyCourses({ courses }) {
  const [selectedCategory, setSelectedCategory] = useState("all_courses");

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li><a href="/" >Home</a></li>
          <li><a href="/my-courses">Subscribed Courses</a></li>
        </ul>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Subscribed Courses</h1>
      </div>

      {/* Category Filter */}
      <div className="flex justify-end items-center gap-4 mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="all_courses">All Courses</option>
          {courseCategory.map((category) => (
            <option key={category.value} value={category.value}>{category.title}</option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} toSubscribe={false} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No subscribed courses yet.
          </p>
        )}
      </div>
    </div>
  );
}