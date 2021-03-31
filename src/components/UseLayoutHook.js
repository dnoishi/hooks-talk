import React from "react";

const Message = ({ boxRef, children }) => {
  const msgRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    msgRef.current.style.top = `${rect.height + rect.top}px`;
  }, []);

  return (
    <span ref={msgRef} className="msg">
      {children}
    </span>
  );
};

const UseLayoutHook = () => {
  const [show, setShow] = React.useState(false);
  const boxRef = React.useRef(null);

  return (
    <div>
      <div
        ref={boxRef}
        className="box"
        onClick={() => setShow((prev) => !prev)}
      >
        Click me
      </div>
      {show && <Message boxRef={boxRef}>Foo bar baz</Message>}
    </div>
  );
};

export default UseLayoutHook;
