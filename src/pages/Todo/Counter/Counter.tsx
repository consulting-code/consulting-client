import { Badge, Button } from "antd";
import React, { useMemo, useReducer } from "react";

interface ICounter {
  count: number;
}

type ActionType = "increment" | "decrement";

interface CounterAction {
  type: ActionType;
}

const initialState: ICounter = { count: 18 };

function fibonacci(num: number): number {
  console.log(num);
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

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
  const fib = useMemo(() => fibonacci(state.count), [state.count]);

  console.log("[Counter] render");

  return (
    <div>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Badge count={state.count} style={{ backgroundColor: "#52c41a" }} />
      <div>{fib}</div>
    </div>
  );
};

export default Counter;
