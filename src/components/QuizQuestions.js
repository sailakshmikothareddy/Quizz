import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "./QuizProvider";
import OverviewPanel from "./OverviewPanel";
import Timer from "./Timer";
import "./OverView.css"; 


function QuizQuestions() {
  const { questions, userAnswers,setUserAnswers, questionClick, submitQuiz,currentQuestionIndex,setCurrentQuestionIndex } = useContext(
    QuizContext
  );
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(true);
console.log()
  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
       
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isTimerActive]);

  
  const handleNextQuestion = () => {
    if (selectedAnswer !== "") {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
      setUserAnswers(updatedUserAnswers);

      questionClick(currentQuestionIndex);
      setSelectedAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        submitQuiz(updatedUserAnswers); 
        navigate("/report");
      }
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
    <Timer isTimerActive={isTimerActive} />
    <div className="flex justify-between">
      <div className="w-1/4 p-4 border border-gray-300 rounded-lg">
        <OverviewPanel
          questions={questions}
          userAnswers={userAnswers}
          setCurrentQuestionIndex={setCurrentQuestionIndex} 
        />
      </div>
      <div className="w-3/4 p-4 border border-gray-300 rounded-lg ml-4">
        <h1 className="text-2xl">Question {currentQuestionIndex + 1}</h1>
        <h2 className="text-xl">{currentQuestion?.question}</h2>
        <ul className="list-none">
          {currentQuestion?.answers?.map((answer, index) => (
            <li className="text-lg my-2" key={index}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => setSelectedAnswer(answer)}
                  className="mr-2"
                />
                <span className="text-gray-700">{answer}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  </>
  );
}

export default QuizQuestions;
