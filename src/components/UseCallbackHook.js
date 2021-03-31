import React, { useState, useRef, useCallback } from "react";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <div>
      <MyButton increment={increment} />
      <div>{count}</div>
    </div>
  );
};

export default UseCallbackHook;

const MyButton = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log("renders ", renders.current++);

  return <button onClick={increment}>my button</button>;
});
