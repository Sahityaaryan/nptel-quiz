export default async function QuizReport({ params }) {
  const attempt = await fetchQuizAttempt(params.attemptId);

  return (
    <div className="p-4">
      <h1>Quiz Report</h1>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Score: {attempt.score}/{attempt.totalPossibleScore}</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {attempt.answers.map((a, i) => (
                <tr key={i}>
                  <td>{attempt.quiz.questions[i].text}</td>
                  <td>{a.selectedAnswer}</td>
                  <td>{attempt.quiz.questions[i].correctAnswer}</td>
                  <td>{attempt.quiz.questions[i].explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary">Save to Revision Hub</button>
        </div>
    </div>
  </div>
);}