import React, { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [myObjetoState, dispatch] = useReducer(formReducer, {
    username: "john",
    password: "mipass",
  });
  return (
    <div>
      <p>
        {myObjetoState.username} {myObjetoState.password}
      </p>
      <input
        value={myObjetoState.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", payload: e.target.value })
        }
      />

      <input
        value={myObjetoState.password}
        onChange={(e) =>
          dispatch({ type: "setPassword", payload: e.target.value })
        }
      />
    </div>
  );
};

export default Form;
