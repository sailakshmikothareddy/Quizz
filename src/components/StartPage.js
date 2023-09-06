import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "./QuizProvider";
import styles from "./StartPage.module.css"; 

function StartPage() {
  const { startQuiz } = useQuiz();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      startQuiz(email);
      navigate("/quiz");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Quiz!</h2>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-lg font-bold">Enter your email address:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default StartPage;
