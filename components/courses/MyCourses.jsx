"use client";

import { useState } from "react";
import { courseCategory } from "@/data/category";
import Link from "next/link";
import CourseCard from "./CourseCard";

export default function MyCourses({ courses }) {
  const [selectedCategory, setSelectedCategory] = useState("all_courses");

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/courses">Subscribed Courses</a>
          </li>
        </ul>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Subscribed Courses
        </h1>
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
            <option key={category.value} value={category.value}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses
            .filter((course) =>
              selectedCategory !== "all_courses"
                ? course.category === selectedCategory
                : true,
            )
            .map((course) => (
              <CourseCard key={course.id} course={course} toSubscribe={false} />
            ))
        ) : (
          <div className="flex flex-col w-screen md:w-[60vw] items-center justify-center gap-4 min-h-[50vh]">
            <p className="text-center text-gray-500 text-lg font-medium">
              No subscribed courses yet.
            </p>

            <Link href="/all-courses">
              <button className="px-6 py-2 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-all duration-200">
                Explore Courses
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
