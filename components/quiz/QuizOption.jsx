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
    <div className="form-control m-3 w-full max-w-full">
      <label
        className={`label cursor-pointer p-3 rounded-lg border flex items-start w-full ${
          selectedAnswer
            ? isCorrect
              ? "border-success bg-success text-black bg-opacity-20"
              : isIncorrect
                ? "border-error bg-error text-black bg-opacity-20"
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
          className="radio mt-1"
        />
        <span className="label-text text-lg ml-2 flex-1 break-words whitespace-normal">
          {option}
        </span>
      </label>
    </div>
  );
}
