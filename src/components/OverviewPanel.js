
import React from "react";
import "./OverView.css";
import { useQuiz } from "./QuizProvider";

function OverviewPanel() {
  const { questions, userAnswers, setCurrentQuestionIndex } = useQuiz(); 
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index); 

  };
  return (
    <div className="bg-thistle px-8 py-2 rounded-lg">
    <h2 className="text-2xl mb-7">Questions Overview</h2>
    <ul className="text-center">
      {questions.map((question, index) => (
        <li
          key={index}
          className={`cursor-pointer p-2 m-2 rounded-lg ${
            userAnswers[index] === null ? 'bg-red-500' : ''
          } ${userAnswers[index] !== null ? 'bg-green-450' : ''} ${
            userAnswers[index] !== null ? 'bg-green-500' : ''
          }`}
          onClick={() => handleQuestionClick(index)} 
        >
          <span className="font-bold text-white">Question {index + 1}</span>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default OverviewPanel;
