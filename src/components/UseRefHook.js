import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" name="myInput" />
      <button onClick={() => inputRef.current.focus()}>Focus to input</button>
    </div>
  );
};

export default UseRefHook;
