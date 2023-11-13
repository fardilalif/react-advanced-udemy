import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 22,
    hobby: "read book",
  });

  const handleClick = () => {
    setPerson({
      name: "john",
      age: 23,
      hobby: "scream at the computer",
    });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys to {person.hobby}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
