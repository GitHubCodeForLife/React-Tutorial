import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    firstName: "Tran",
    lastName: "Tuan",
    age: 0,
    msg: "This is a message",
  });

  return (
    <>
      <h2>{person.firstName}</h2>
      <h3>{person.lastName}</h3>
      <h2>{person.age}</h2>
      <p>{person.msg}</p>
      <button
        onClick={() => {
          //change message
          setPerson({
            ...person,
            msg: "This is a new message",
          });
        }}
      >
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
