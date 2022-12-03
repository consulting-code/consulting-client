import { Badge, Button } from "antd";
import React, { useReducer } from "react";

interface ICounter {
  count: number;
}

type ActionType = "increment" | "decrement";

interface CounterAction {
  type: ActionType;
}

const initialState: ICounter = { count: 1 };

function reducer(state: ICounter, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Badge count={state.count} style={{ backgroundColor: "#52c41a" }} />
    </div>
  );
};

export default Counter;
