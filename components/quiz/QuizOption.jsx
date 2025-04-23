"use client";
export default function QuizOption({
  index,
  option,
  selectedAnswer,
  correctAnswer,
  onAnswerSelected,
}) {
  const isSelected = selectedAnswer === option;
  const isCorrect = option === correctAnswer;
  const isIncorrect = isSelected && !isCorrect;

  return (
    <div className="form-control m-3">
      <label
        className={`label cursor-pointer p-3 rounded-lg border ${
          selectedAnswer
            ? isCorrect
              ? "border-success bg-success bg-opacity-20"
              : isIncorrect
                ? "border-error bg-error bg-opacity-20"
                : "border-base-300"
            : "border-base-300"
        }`}
      >
        <input
          type="radio"
          name={`question-${index}`}
          value={option}
          checked={isSelected}
          onChange={() => onAnswerSelected(index, option)}
          className="radio hidden"
        />
        <span className="label-text text-lg">{option}</span>
      </label>
    </div>
  );
}
