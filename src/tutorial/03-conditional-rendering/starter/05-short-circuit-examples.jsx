import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
        </div>
      )}
      {user && <SomeComponent user={user} />}
      {user ? (
        <div>
          <h4>hello there user: {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = (props) => {
  const {
    user: { name },
  } = props;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
