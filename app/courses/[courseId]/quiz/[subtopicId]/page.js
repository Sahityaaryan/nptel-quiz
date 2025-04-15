'use client';
import { useState, useEffect } from 'react';

export default function QuizInterface({ quiz }) {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="p-4">
      <h1>{quiz.title}</h1>
      <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
      {quiz.questions.map(q => (
        <div key={q.id} className="form-control">
          <label className="label">{q.text}</label>
          {q.options.map(option => (
            <label key={option} className="label cursor-pointer">
              <input
                type="radio"
                name={q.id}
                value={option}
                onChange={() => handleAnswer(q.id, option)}
                className="radio"
              />
              <span className="label-text">{option}</span>
            </label>
          ))}
        </div>
      ))}
      <button className="btn btn-primary">Submit Quiz</button>
    </div>
  );
}