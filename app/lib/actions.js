// lib/actions.js
'use server';

import prisma from "./prisma";

/**
 * Fetches featured courses.
 * Note: Since there is no specific "featured" field in the schema,
 * this function fetches all courses for now. You can modify it later
 * if you add a field like `isFeatured` to the Course model.
 */
export async function fetchFeaturedCourses() {
  const courses = await prisma.course.findMany({ 
    select: {
      id: true,
      title: true,
      description: true,
      thumbnail: true,
      price: true,
      category: true,
      difficulty: true,
      duration: true,
    },
  });

  console.log("[courses](fetched from the db): ", courses);
  return courses;
}

/**
 * Fetches all available courses.
 */
export async function fetchAllCourses() {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      thumbnail: true,
      price: true,
      category: true,
      difficulty: true,
      duration: true,
    },
  });
  return courses;
}

/**
 * Fetches user statistics, including the number of subscribed courses
 * and quizzes completed.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - An object with `subscribedCourses` and `quizzesCompleted`.
 */
export async function fetchUserStats(userId) {
    console.log("user: ", userId);
  const subscribedCourses = await prisma.subscription.count({
    where: { userId },
  });
  const quizzesCompleted = await prisma.quizAttempt.count({
    where: { userId },
  });
  return { subscribedCourses, quizzesCompleted };
}

/**
 * Fetches a specific course by its ID.
 * @param {string} courseId - The ID of the course.
 * @returns {Object|null} - The course details or null if not found.
 */
export async function fetchCourse(courseId) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: {
      id: true,
      title: true,
      description: true,
      thumbnail: true,
      price: true,
      category: true,
      difficulty: true,
      duration: true,
    },
  });
  return course;
}

/**
 * Fetches all subtopics for a specific course.
 * Includes whether each subtopic has notes and quizzes.
 * @param {string} courseId - The ID of the course.
 * @returns {Array} - An array of subtopics with their details.
 */
export async function fetchSubTopics(courseId) {
  const subtopics = await prisma.subtopic.findMany({
    where: { courseId },
    select: {
      id: true,
      title: true,
      description: true,
      notes: true,
      _count: {
        select: { quizzes: true },
      },
    },
  });
  return subtopics;
}