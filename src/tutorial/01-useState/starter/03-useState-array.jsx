import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemoveItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const handleClearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <button type="button" onClick={() => handleRemoveItem(person.id)}>
              clear
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={handleClearAllItems}
        style={{ marginTop: "2rem" }}
      >
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
