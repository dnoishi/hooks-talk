import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";

const MyInput = forwardRef((props, ref) => {
  const [val, setVal] = useState("");
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    },
  }));

  return (
    <input
      ref={inputRef}
      val={val}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    />
  );
});

const ImperativeHandleHook = () => {
  const ref = useRef(null);

  const onBlur = () => {
    console.log(ref.current); // Only contains one property!
    ref.current.blur();
  };

  return <MyInput ref={ref} onBlur={onBlur} />;
};

export default ImperativeHandleHook;
