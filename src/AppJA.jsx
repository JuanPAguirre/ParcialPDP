import ButtonJA from "./components/ButtonJA";
//import QuestionJA from "./components/QuestionJA"
import { useState } from "react";

const questions = [
  {
    question: "¿Cuándo se inventó la escritura?",
    answers: [
      "Hace 20 mil años.", 
      "En el IV milenio a.C.", 
      "En el año 0.", 
      "Siglo XX"],
    correctAnswer: "En el año 0.",
  },
  {
    question: "Según las leyendas de la antiguedad, ¿quiénes fundaron a Roma?",
    answers: [
      "Rómulo y Remo.", 
      "Alejandro Magno y Ptolomeo.", 
      "Aquiles y Odiseo.", 
      "Cesar Augustu"],
    correctAnswer: "Rómulo y Remo.",
  },
  {
    question: "¿Cuál de estos emperadores fue alumno del filósofo griego Aristóteles?",
    answers: [
      "Carlomagno", 
      "Trajano", 
      "Cesar", 
      "Alejandro Magno"],
    correctAnswer: "Alejandro Magno",
  },
];
function AppJA() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState("");
  const handleAnswerClick = (answer) => {
    if (answer === questions[actualQuestion].correctAnswer) {
      setActualQuestion(actualQuestion + 1);
      setIncorrectAnswer("");
    } else {
      setIncorrectAnswer(answer);
    }
  };
  return (
    <div>
      <h1>Questionary</h1>
      <ButtonJA
        question={questions[actualQuestion].question}
        answers={questions[actualQuestion].answers}
        handleAnswerClick={handleAnswerClick}
      />
      {incorrectAnswer && <p>Respuesta incorrecta</p>}
    </div>

  );
}
export default AppJA;

