// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// import Solution from "./Solutions";
import { questionData } from "./questionData";
import { SingleQuestion } from "./SingleQuestion";

function App() {
  return <Questions />;
}

function Questions() {
  const [questions, setQuetions] = useState(questionData);
  return (
    <div>
      <form>
        <h1>Hello</h1>
        {questions.map((question) => (
          <SingleQuestion
            key={question.id}
            question={question}
            handleChange={(value) =>
              handleChange(question.id, value, questions, setQuetions)
            }
          />
        ))}
        <button
          onClick={() => submitAnswer(questions, setQuetions)}
          type="button"
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => clearAnswer(questions, setQuetions)}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

function clearAnswer(questions, setQuetions) {
  const newQuestions = [...questions];
  newQuestions.forEach((question) => {
    delete question.value;
    question.error = true;
  });
  setQuetions(newQuestions);
}

function submitAnswer(questions, setQuetions, setIsError) {
  const newQuestions = [...questions];
  let isError = false;
  newQuestions.forEach((question) => {
    if (question.value === undefined) {
      question.error = true;
      isError = true;
    } else {
      question.error = false;
    }
  });
  if (isError) {
    setQuetions(newQuestions);
    setIsError(true);
  } else {
    console.log(newQuestions);
  }
}

function handleChange(id, value, questions, setQuetions) {
  const newQuestions = [...questions];
  newQuestions[id].value = value;
  newQuestions[id].error = false;
  setQuetions(newQuestions);
}

export default App;
