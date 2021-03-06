import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List>
        <Test />
      </List>
    </PersonContext.Provider>
  );
};

const Test = () => {
  const mainData = useContext(PersonContext);
  const { removePerson } = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      <button onClick={() => removePerson(1)}> Remove Person</button>
    </>
  );
};
const List = ({ children }) => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {children}
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
