import { useState } from "react";

const ToggleChallenge = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const toggleValue = () => {
    isAvailable ? setIsAvailable(false) : setIsAvailable(true);
  };
  return (
    <div>
      <button type="button" className="btn" onClick={toggleValue}>
        toggle
      </button>
      {isAvailable ? <Available /> : <NotAvailable />}
    </div>
  );
};

const Available = () => {
  return (
    <div>
      <h2>hello i'm available</h2>
    </div>
  );
};
const NotAvailable = () => {
  return (
    <div>
      <h2>sorry i'm not available</h2>
    </div>
  );
};

export default ToggleChallenge;
