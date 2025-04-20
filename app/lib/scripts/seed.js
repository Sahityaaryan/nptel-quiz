// import prisma from "../prisma";
//
const prisma = require("../prisma");

async function main() {
  // console.log("Starting seeding process...");

  // // Optional: Clear existing data (uncomment to use)
  // /*
  // await prisma.subscription.deleteMany();
  // await prisma.quiz.deleteMany();
  // await prisma.subtopic.deleteMany();
  // await prisma.course.deleteMany();
  // await prisma.user.deleteMany();
  // */

  // // Create a User

  // const user = await prisma.user.upsert({
  //   where: { email: "test.user@example.com" },
  //   update: {},
  //   create: {
  //     email: "test.user@example.com",
  //     name: "Test User",
  //     role: "public",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });
  // console.log("Created user:", user.email);

  // // Create a Course
  // const course = await prisma.course.upsert({
  //   where: { title: "Data Structures Mastery" },
  //   update: {},
  //   create: {
  //     title: "Data Structures Mastery",
  //     description:
  //       "Learn data structures like arrays, linked lists, and trees.",
  //     price: 999.99,
  //     category: "Computer Science",
  //     difficulty: "Intermediate",
  //     duration: 1200, // 20 hours
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });
  // console.log("Created course:", course.title);

  // // Create a Subtopic
  // const subtopic = await prisma.subtopic.create({
  //   data: {
  //     courseId: course.id,
  //     title: "Arrays",
  //     description: "Introduction to arrays and their operations.",
  //     notes: "https://drive.google.com/file/d/1Xyz1234567890/view?usp=sharing",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });
  // console.log("Created subtopic:", subtopic.title);

  // // Create a Quiz
  // const quiz = await prisma.quiz.create({
  //   data: {
  //     subtopicId: subtopic.id,
  //     title: "Arrays: Beginner Quiz",
  //     questions: [
  //       {
  //         text: "What is the time complexity of accessing an array element?",
  //         options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
  //         correctAnswer: "O(1)",
  //         explanation: "Array access is constant time due to direct indexing.",
  //       },
  //       {
  //         text: "What is an array?",
  //         options: [
  //           "A dynamic data structure",
  //           "A collection of elements with contiguous memory",
  //           "A tree-based structure",
  //           "A graph-based structure",
  //         ],
  //         correctAnswer: "A collection of elements with contiguous memory",
  //         explanation:
  //           "Arrays store elements in contiguous memory for fast access.",
  //       },
  //     ],
  //     duration: 300, // 5 minutes
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });
  // console.log("Created quiz:", quiz.title);

  // Create a Subscription
  const subscription = await prisma.subscription.create({
    data: {
      userId: "67fe86183e35e090f6cfe96a",
      courseId: "67ffcadae2cd908c0ccef066",
      paymentId: "546706121825", // No payment system specified
      orderId: "1",
      status: "active",
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log("Created subscription:", subscription.id);

  console.log("Seeding completed successfully!");
}

main().catch((e) => {
  console.error("Seeding failed:", e);
  process.exit(1);
});
