import { useState } from "react";

const ShortCircuitOverview = () => {
  const [truthy, setTruthy] = useState("true");
  const [falsy, setFalsy] = useState("");

  return (
    <div>
      <h4>Falsy OR: {falsy || "Hello world"}</h4>
      <h4>Falsy AND: {falsy && "Hello world"}</h4>
      <h4>Thruthy OR: {truthy || "Hello world"}</h4>
      <h4>Thruthy AND: {truthy && "Hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
