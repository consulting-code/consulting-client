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
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function fibonacciCached(): Function {
  let cache = new Map();
  function fn(num: number) {
    if (!cache.has(num)) {
      const result = fibonacci(num);
      cache.set(num, result);
      return result;
    }
    return cache.get(num);
  }
  return fn;
}

const fibonacciCalc = fibonacciCached();

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
  const fib = useMemo(() => fibonacciCalc(state.count), [state.count]);

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
