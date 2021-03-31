import React, { useState, useEffect } from "react";

const ButtonHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Boton llamado ${count} veces`);

    return () => console.log(`adios boton ${count}`);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
};

export default ButtonHooks;
