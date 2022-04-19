import React from "react";

export function SingleQuestion({ question, handleChange }) {
  return (
    <div value={question.value}>
      <h1>{question.id}</h1>
      {question.error && <p>Please select an option</p>}
      <input
        type="radio"
        value={question.answer.A}
        name={question.id}
        checked={question.value == question.answer.A}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <label>{question.answer.A}</label>
      <input
        type="radio"
        value={question.answer.B}
        name={question.id}
        checked={question.value == question.answer.B}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <label>{question.answer.B}</label>
    </div>
  );
}
