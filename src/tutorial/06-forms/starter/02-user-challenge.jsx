import { useState } from "react";
import { data } from "./../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setPeople([...people, { id: Date.now(), name }]);
    setName("");
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}

      <h2>users</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removePerson(person.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
