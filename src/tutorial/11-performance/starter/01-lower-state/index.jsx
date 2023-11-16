import { useState } from "react";
import { data } from "../../../../data";
import Counter from "./Counter.jsx";
import List from "./List";
const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;
