import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request) {
  try {
    const { userId, quizId, answers, score } = await request.json();

    if (!userId || !quizId) {
      return NextResponse.json({ error: 'userId and quizId are required' }, { status: 400 });
    }

    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId,
        answers,
        score: parseFloat(score),
        completedAt: new Date(),
      },
    });

    await prisma.quiz.update({
      where: { id: quizId },
      data: {
        attempts: {
          connect: { id: quizAttempt.id },
        },
      },
    });

    return NextResponse.json({ quizAttempt });
  } catch (error) {
    console.error('Error saving quiz attempt:', error);
    return NextResponse.json({ error: 'Failed to save attempt' }, { status: 500 });
  }
}