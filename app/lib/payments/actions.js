"use server";

// import { get } from "next-auth";
import { getUserSession } from "../session";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import nodemailer from "nodemailer";
import prisma from "../prisma";

export async function submitTransactionId(formData) {
  try {
    const transactionId = formData.get("transactionId");
    const courseId = formData.get("courseId");
    const amount = parseFloat(formData.get("amount"));
    const userName = formData.get("userName"); // Replace with actual user data
    const userEmail = formData.get("userEmail"); // Replace with actual user data
    const courseTitle = formData.get("courseTitle");

    // checking whether the form is recieving or Notes

    // Validate inputs
    if (!transactionId || transactionId.length !== 12) {
      return {
        success: false,
        error: "Invalid Transaction ID. Must be 12 digits.",
      };
    }
    if (!courseId || (!amount && amount != 0) || isNaN(amount)) {
      return { success: false, error: "Invalid course or amount." };
    }
    if (!userName || !userEmail || !courseTitle) {
      return { success: false, error: "Missing user or course details." };
    }

    // Save payment to MongoDB
    const payment = await prisma.payment.create({
      data: {
        user: { connect: { email: userEmail } }, // Assumes user exists
        course: { connect: { id: courseId } },
        transactionId,
        amount,
        status: "pending",
      },
    });

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_SERVER_USERNAME, // work.sahityaaryan@gmail.com
        pass: process.env.SMTP_SERVER_PASSWORD, // App Password
      },
    });

    // Email content
    const mailOptions = {
      from: userEmail,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: `New User:${userName} Course Payment: ${courseTitle}`,
      text: `
        New payment received for course: ${courseTitle}
        User Name: ${userName}
        User Email: ${userEmail}
        Transaction ID: ${transactionId}
        Amount: ₹${amount.toFixed(2)}
        Course ID: ${courseId}
      `,
      html: `
        <h2>New Course Payment</h2>
        <p><strong>Course:</strong> ${courseTitle}</p>
        <p><strong>User Name:</strong> ${userName}</p>
        <p><strong>User Email:</strong> ${userEmail}</p>
        <p><strong>Transaction ID:</strong> ${transactionId}</p>
        <p><strong>Amount:</strong> ₹${amount.toFixed(2)}</p>
        <p><strong>Course ID:</strong> ${courseId}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success message
    return {
      success: true,
      message:
        "Thank you for your payment! Please wait up to 1 hour to get access to the course. If it takes longer, email work.sahityaaryan@gmail.com.",
    };
  } catch (error) {
    console.error("Error in submitTransactionId:", error);
    return {
      success: false,
      error: "Failed to process payment. Please try again or contact support.",
    };
  } finally {
    await prisma.$disconnect();
  }
}

export async function subscribeUserToCourse(formData) {
  try {
    const email = formData.get("email");
    const courseId = formData.get("courseId");

    // Validate inputs
    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address." };
    }
    if (!courseId) {
      return { success: false, error: "Invalid course ID." };
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return { success: false, error: "User not found." };
    }

    // Find pending payment
    const payment = await prisma.payment.findFirst({
      where: {
        userId: user.id,
        courseId,
        status: "pending",
      },
    });

    if (!payment) {
      return {
        success: false,
        error: "No pending payment found for this user and course.",
      };
    }

    // Update payment status to verified
    await prisma.payment.update({
      where: {
        id: payment.id,
      },
      data: {
        status: "verified",
        updatedAt: new Date(),
      },
    });

    // Check for existing active subscription
    const existingSubscription = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        courseId,
        status: "active",
      },
    });

    if (existingSubscription) {
      return {
        success: false,
        error: "User is already subscribed to this course.",
      };
    }

    // Calculate expiration (1 year from now)
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    // Create new subscription
    await prisma.subscription.create({
      data: {
        user: { connect: { id: user.id } },
        course: { connect: { id: courseId } },
        payment: { connect: { id: payment.id } },
        status: "active",
        expiresAt,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return {
      success: true,
      message: `User ${email} successfully subscribed to course ${courseId}.`,
    };
  } catch (error) {
    console.error("Error in subscribeUserToCourse:", error);
    return {
      success: false,
      error: "Failed to subscribe user. Please try again or contact support.",
    };
  } finally {
    await prisma.$disconnect();
  }
}
