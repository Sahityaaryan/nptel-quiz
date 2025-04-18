'use client'

import { saveQuizAttempt } from "@/app/lib/actions";
// import { getUserSession } from "@/app/lib/session";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
// import Quiz from "./Quiz";


export default function QuizReport({ questions, selectedAnswers, quiz }) {
    // const {user} = useUser();
    // const {quiz} = useQuiz();
  const router = useRouter();
  const score = questions.reduce((total, _, index) => {
    return selectedAnswers[index]?.isCorrect ? total + 1 : total;
  }, 0);
  const total = questions.length;
  const percentage = ((score / total) * 100).toFixed(2);


  useEffect(()=>{
    const saveAttempt = async () => {

      // console.log("selected Answers: ", selectedAnswers);

      
      try {
        // const user = await getUserSession();
        // const userId = user.id;
        const quizId = quiz.id;

        const answersArray = questions.map((_, index) => ({
          questionIndex: index,
          selectedAnswer: selectedAnswers[index]?.answer || null,
        })).filter((ele)=> ele.selectedAnswer != null);
     
        const percentage = ((score / questions.length) * 100).toFixed(2);

        // console.log("answers array: ", answersArray);

       const attempt =  await saveQuizAttempt({
          quizId,
          answers: answersArray,
          score: percentage,
        });

        // console.log("my attempt: ", attempt);
      } catch (err) {
        console.error('Error saving quiz attempt:', err);
        // setError('Failed to save attempt');
      } 
    };

    saveAttempt();
  },[])

  // const quizAttempt = await saveQuizAttempt(user.id ,quiz.id, selectedAnswers, score);

  return (
    <div className="container mx-auto max-w-3xl mt-10">

<button onClick={() => router.back()} className="inline-flex items-center mb-4 btn btn-ghost text-sm">
  <svg
    className="w-4 h-4 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Go Back
</button>

      <div className="card bg-base-100 shadow-xl p-6">

        <h2 className="text-2xl font-bold text-primary mb-4">Quiz Report</h2>
        <div className="mb-6">
          <p className="text-lg font-semibold">
            Score: {score}/{total} ({percentage}%)
          </p>
          <progress
            className="progress progress-primary w-full"
            value={percentage}
            max="100"
          ></progress>
        </div>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <p className="font-semibold">{q.question}</p>
              <p className="text-sm">
                Your Answer: {selectedAnswers[index]?.answer || 'Not answered'}
                {selectedAnswers[index]?.isCorrect ? (
                  <span className="text-success ml-2">✓ Correct</span>
                ) : (
                  <span className="text-error ml-2">✗ Incorrect</span>
                )}
              </p>
              <p className="text-sm text-success">
                Correct Answer: {q.correctAnswer}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}