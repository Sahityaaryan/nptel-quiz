// lib/actions.js
'use server';

import prisma from "./prisma";
import { getUserSession } from "./session";


  
  export async function getQuizBySubtopicId(subtopicId) {
    if (!subtopicId) {
      throw new Error('subtopicId is required');
    }
  
    try {
      const quiz = await prisma.quiz.findFirst({
        where: {
          subtopicId: subtopicId,
        },
        include: {
          subtopic: true, // Include related Subtopic data
          attempts: true, // Include related QuizAttempt data
          revisionHub: true, // Include related RevisionHub data
        },
      });
  
      if (!quiz) {
        throw new Error(`No quiz found for subtopicId: ${subtopicId}`);
      }
  
      return quiz;
    } catch (error) {
      console.error('Error fetching quiz by subtopicId:', error);
    }
  }
  
  

/**
 * Fetches all available courses.
 */
export async function fetchAllCourses() {

  try {
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
  } catch (err) {
    console.error("[Error while fetching all courses]: ", err);
    throw new Error(`Can't Fetch All Courses`);
  }
}

/**
 * Fetches user statistics, including the number of subscribed courses
 * and quizzes completed.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - An object with `subscribedCourses` and `quizzesCompleted`.
 */
export async function fetchUserStats(userId) {
    // console.log("user: ", userId);
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


/**
 * Adds a new course to the database.
 * @param {Object} data - Course details.
 * @param {string} data.title - Course title.
 * @param {string} data.description - Course description.
 * @param {string} data.thumbnail - URL to course thumbnail.
 * @param {number} data.price - Course price.
 * @param {string} data.category - Course category.
 * @param {string} data.difficulty - Course difficulty.
 * @param {number} data.duration - Course duration in minutes.
 * @returns {Promise<Object>} - The created course.
 */
export async function addCourse(data) {
  const { title, description, thumbnail, price, category, difficulty, duration } = data;
  const course = await prisma.course.create({
    data: {
      title,
      description,
      thumbnail,
      price,
      category,
      difficulty,
      duration,
    },
  });
  return course;
}

/**
 * Adds a new subtopic to a course, including notes.
 * @param {Object} data - Subtopic details.
 * @param {string} data.courseId - ID of the course.
 * @param {string} data.title - Subtopic title.
 * @param {string} data.description - Subtopic description.
 * @param {string} data.notes - Notes for the subtopic.
 * @returns {Promise<Object>} - The created subtopic.
 */
export async function addSubtopic(data) {
  const { courseId, title, description, notes } = data;
  const subtopic = await prisma.subtopic.create({
    data: {
      courseId,
      title,
      description,
      notes,
    },
  });
  return subtopic;
}


/**
 * Fetches subtopics for a given course ID.
 * @param {string} courseId - The ID of the course.
 * @returns {Promise<Array>} - List of subtopics with id and title.
 */
export async function getSubtopicsByCourse(courseId) {
  if (!courseId) {
    throw new Error('Course ID is required');
  }
  const subtopics = await prisma.subtopic.findMany({
    where: { courseId },
    select: { id: true, title: true },
  });
  return subtopics;
}

/**
 * Adds a new quiz to a subtopic.
 * @param {Object} data - Quiz details.
 * @param {string} data.subtopicId - ID of the subtopic.
 * @param {string} data.title - Quiz title.
 * @param {Array} data.questions - Array of question objects.
 * @param {number} data.duration - Quiz duration in minutes.
 * @returns {Promise<Object>} - The created quiz.
 */
export async function addQuiz(data) {
  const { subtopicId, title, questions, duration } = data;
  const quiz = await prisma.quiz.create({
    data: {
      subtopicId,
      title,
      questions: JSON.stringify(questions), // Store questions as JSON
      duration,
    },
  });
  return quiz;
}

export async function getSubtopicBySubtopicId(subtopicId){
  if (!subtopicId) {
    throw new Error('subtopicId is required');
  }

  try {
    const subtopic = await prisma.subtopic.findFirst({
      where: {
        id: subtopicId
      },
      select:{
        title:true,
      },
    })


    return subtopic;
  } catch (err) {
    console.error('Error fetching subtopic by subtopicId:', err);
    // throw err;
  }
}


export async function saveQuizAttempt({ quizId, answers, score }) {
  try {
    const user = await getUserSession();
    let {id} = await prisma.user.findUnique({
      where:{
        email: user.email
      },
      select:{id:true},
    })
    const userId = id;
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId,
        answers, // Already formatted as [{ questionIndex, selectedAnswer }]
        score: parseFloat(score),
        completedAt: new Date(),
      },
    });


    return quizAttempt;
  } catch (error) {
    console.error('Error saving quiz attempt:', error);
    throw error;
  }
}


// Create Razorpay order
export async function createRazorpayOrder({ amount, currency }) {
  try {
    const response = await axios.post(
      'https://api.razorpay.com/v1/orders',
      {
        amount, // In paise
        currency,
        receipt: `receipt_${Date.now()}`,
        notes: { app: 'Quiz Masalaa' },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString('base64')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating Razorpay order:', error.response?.data || error.message);
    throw new Error('Failed to create payment order');
  }
}

// Verify payment and subscribe user to course
export async function verifyAndSubscribe({ paymentId, orderId, signature, userId, courseId }) {
  try {
    // Verify payment signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');
    
    if (generatedSignature !== signature) {
      throw new Error('Invalid payment signature');
    }

    // Create Subscription
    const subscription = await prisma.subscription.create({
      data: {
        userId,
        courseId,
      },
    });

    // Optionally log payment details (e.g., in a Payment model)
    return { status: 'success', subscription };
  } catch (error) {
    console.error('Error verifying payment or subscribing:', error);
    throw error;
  }
}

export  async function fetchSubscription({ courseId}){

    try {
      const user = await getUserSession();
      let {id} = await prisma.user.findUnique({
        where:{
          email: user.email
        },
        select:{id:true},
      })
      const userId = id;
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId,
          courseId,
        },
      });

      return subscription;
    } catch (err) {
      console.error('Error while fetching subscription: ', err);
    throw err; 
    }
}