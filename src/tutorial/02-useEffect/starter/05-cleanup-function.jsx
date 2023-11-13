import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {};

    window.addEventListener("scroll", someFunc);

    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h2>hello from second component</h2>;
};

export default CleanupFunction;
