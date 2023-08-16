import { useState } from "react";
import ChildCompSample from "./2.child-comp";

const ParentCompSample = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    console.log("On Clicked");
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment from parent</button>
      <ChildCompSample onMyIncrement={onIncrement} />
    </>
  );
};

export default ParentCompSample;



const ChildCompSample = ({ onMyIncrement }) => {
  console.log("Props: ", onMyIncrement);
  return (
    <>
      <p>I am from child</p>
      <button onClick={onMyIncrement}>Increment From child</button>
    </>
  );
};

export default ChildCompSample;