import React from "react";
function ButtonJA({ question, answers, handleAnswerClick }) {
    return (
      <ul>
        <p>{question}</p>
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    );
  }
export default ButtonJA;