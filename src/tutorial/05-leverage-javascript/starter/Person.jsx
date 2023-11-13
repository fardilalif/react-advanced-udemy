import React from "react";
import defaultImg from "../../../assets/default-avatar.svg";
export function Person({ people }) {
  return (
    <div>
      {people.map((person) => {
        return (
          <article key={person.id}>
            <h4>{person.name}</h4>
            <p>{person.nickName || "No nickname available"}</p>
            <img
              src={person.images?.[0]?.small?.url || defaultImg}
              alt={person.name}
              className="img"
              style={{ width: "150px", margin: "0 auto" }}
            />
          </article>
        );
      })}
    </div>
  );
}
