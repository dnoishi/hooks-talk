import React, { useState, useEffect, useMemo } from "react";

const fetchData = () => {
  // Imagina un API call aqui
  return Math.random();
};

const runHeavyCalc = (data) => {
  if (!data) return;
  console.log("corriendo un calculo muy pesado con", data);

  return Math.floor(data * 100);
};

const CounterMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  console.log("App count se renderizo con", count);

  useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);

  const result = useMemo(() => runHeavyCalc(data), [data]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Counter: {count}</p>
      <p>Result is {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default CounterMemo;
