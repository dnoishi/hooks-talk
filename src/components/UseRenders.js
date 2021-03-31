import { useRef, useDebugValue } from "react";

export const UseRenders = () => {
  const renders = useRef(0);
  console.log("renders ", renders.current++);

  useDebugValue(renders ?? "loading");
};
