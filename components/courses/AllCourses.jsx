"use client";

import { useState } from "react";
import { courseCategory } from "@/data/category";
import CourseCard from "./CourseCard";
import Link from "next/link";

export default function AllCourses({ courses }) {
  const [selectedCategory, setSelectedCategory] = useState("all_courses");

  return (
    <div className="min-h-screen bg-base-100 px-4 md:px-10 py-6">
      {/* Breadcrumb Navigation */}
      <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>All Courses</li>
        </ul>
      </div>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">
        Explore Our Courses
      </h1>

      {/* Category Filter */}
      <div className="flex justify-end items-center gap-4 mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="all_courses">All Courses</option>
          {courseCategory.map((category) => (
            <option key={category.value} value={category.value}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* Course Flex Container */}
      <div className="flex flex-wrap gap-6">
        {courses
          .filter((course) =>
            selectedCategory !== "all_courses"
              ? course.category === selectedCategory
              : true,
          )
          .map((course) => (
            <div
              key={course.id}
              className="w-full sm:w-[calc(100%-2rem)] lg:w-[calc(40%-2rem)] m-2"
            >
              <CourseCard course={course} toSubscribe={true} />
            </div>
          ))}
      </div>
    </div>
  );
}
