import React, { useState, useRef } from "react";

const RendersOnFunCreation = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <MyButton increment={() => setCounter(count + 1)} />
      <div>{count}</div>
    </div>
  );
};

export default RendersOnFunCreation;

export const MyButton = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log("renders ", renders.current++);

  return <button onClick={increment}>my button</button>;
});
