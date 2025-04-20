"use server";

// import { get } from "next-auth";
import { getUserSession } from "../session";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from "../prisma";

export async function submitTransactionId(formData) {
  const transactionId = formData.get("transactionId");
  const courseId = formData.get("courseId");
  const amount = parseFloat(formData.get("amount"));

  // Get authenticated user
  // const session = await getServerSession(authOptions);
  const session_user = await getUserSession();
  if (!session_user?.email) {
    return { error: "Please sign in to complete the payment." };
  }

  const user = await prisma.user.findUnique({
    where: { email: session_user.email },
  });
  if (!user) {
    return { error: "User not found." };
  }

  // Validate Transaction ID format (12-digit alphanumeric)
  const transactionIdRegex = /^[a-zA-Z0-9]{12}$/;
  if (!transactionIdRegex.test(transactionId)) {
    return {
      error:
        "Invalid Transaction ID. It must be a 12-digit alphanumeric code. Please check and try again or email support@quizmasala.com with proof of payment.",
    };
  }

  // Check for duplicate Transaction ID
  const existingPayment = await prisma.payment.findUnique({
    where: { transactionId },
  });
  if (existingPayment) {
    return {
      error: "You are posting an old transaction",
    };
  }

  // Verify course exists
  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });
  if (!course) {
    return { error: "Course not found." };
  }

  // Check if amount matches course price
  if (course.price !== amount) {
    return {
      error:
        "Payment amount does not match course price. Please email work.sahityaaryan@gmail.com with proof of payment.",
    };
  }

  // Create Payment record (pending, awaiting manual verification)
  const payment = await prisma.payment.create({
    data: {
      userId: user.id,
      courseId,
      transactionId,
      amount,
      status: "pending",
    },
  });

  // For now, assume manual verification (replace with API check later)
  // TODO: Manually verify Transaction ID in your UPI app/bank statement
  // If valid, update payment status to 'verified' and create subscription
  const isVerified = true; // Placeholder for manual check

  if (isVerified) {
    // Update payment status
    await prisma.payment.update({
      where: { id: payment.id },
      data: { status: "verified" },
    });

    // Create subscription
    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        courseId,
        paymentId: payment.id,
        status: "active",
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
      },
    });

    return {
      success: true,
      message: "Payment verified! You are now subscribed to the course.",
      subscriptionId: subscription.id,
    };
  } else {
    // Store as pending for manual review
    return {
      error:
        "Transaction ID submitted. Please wait for manual verification. If urgent, email support@quizmasala.com with proof of payment (e.g., UPI app screenshot).",
      paymentId: payment.id,
    };
  }
}
