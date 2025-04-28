"use client";
import { useState, useEffect } from "react";
import QuizOption from "./QuizOption";
import QuizReport from "./QuizReport";
import Link from "next/link";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function Quiz({ questions, subtopic, quiz }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(720);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();
  const currentQuestion = questions[activeQuestion];

  console.log("active: ", currentQuestion);

  useEffect(() => {
    if (timer > 0 && !isFinished) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      handleNext();
    }
  }, [timer, isFinished]);

  const handleAnswer = (index, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [activeQuestion]: {
        answer,
        isCorrect: answer === currentQuestion.correctAnswer,
      },
    }));
  };
  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setTimer(60); // Reset timer for next question
    } else {
      setIsFinished(true);
    }
  };

  const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

  if (isFinished) {
    return (
      <QuizReport
        questions={questions}
        quiz={quiz}
        selectedAnswers={selectedAnswers}
      />
    );
  }

  return (
    <div className="container mx-auto max-w-3xl mt-10">
      {/* breadcrumbs */}

      <button
        onClick={() => router.back()}
        className="inline-flex items-center mb-4 btn btn-ghost text-sm"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Go Back
      </button>

      <h2 className="text-2xl font-bold text-primary mb-4">Quiz</h2>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-base-content">
          Subtopic: {subtopic || "Unknown Subtopic"}
        </h3>
      </div>
      <div className="card bg-base-100 shadow-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-primary">
            Question {addLeadingZero(activeQuestion + 1)}/
            {addLeadingZero(questions.length)}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-lg font-semibold text-primary">
              {addLeadingZero(Math.floor(timer / 60))}:
              {addLeadingZero(timer % 60)}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">
          {currentQuestion.questions}
        </h3>
        <form>
          {currentQuestion?.options &&
            currentQuestion?.options.map((option, index) => (
              <QuizOption
                key={index}
                index={index}
                option={option}
                selectedAnswer={selectedAnswers[activeQuestion]?.answer}
                correctAnswer={currentQuestion.correctAnswer}
                onAnswerSelected={handleAnswer}
              />
            ))}
          {currentQuestion?.answers &&
            currentQuestion?.answers.map((option, index) => (
              <QuizOption
                key={index}
                index={index}
                option={option}
                selectedAnswer={selectedAnswers[activeQuestion]?.answer}
                correctAnswer={currentQuestion.correctAnswer}
                onAnswerSelected={handleAnswer}
              />
            ))}
        </form>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            disabled={!selectedAnswers[activeQuestion]}
            className="btn btn-primary"
          >
            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
