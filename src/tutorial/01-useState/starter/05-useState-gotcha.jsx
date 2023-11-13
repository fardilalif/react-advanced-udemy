import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentValue) => {
      const latestValue = currentValue + 1;
      console.log(latestValue);
      return latestValue;
    });
  };
  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        update
      </button>
    </>
  );
};

export default UseStateGotcha;
