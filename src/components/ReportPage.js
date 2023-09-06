
import React from "react";
import { useQuiz } from "./QuizProvider";

function ReportPage() {
  const { questions, userAnswers } = useQuiz();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
    <h2 className="text-2xl font-bold mb-4">Quiz Report</h2>
    <ul>
      {questions.map((question, index) => (
        <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold mb-2">Question {index + 1}: {question?.question}</h3>
          <p className="text-lg">Correct Answer: {question.correct_answer}</p>
          <p className="text-lg">Your Answer: {userAnswers[index]}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ReportPage;
