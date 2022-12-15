import { Button } from "antd";
import {
  useContext,
  forwardRef,
  useRef,
  useImperativeHandle,
  useId,
} from "react";

import { ThemeContext } from "../../Todo";

const ThemedButton = (props: any, ref: any) => {
  const id = useId();
  const buttonRef: any = useRef();
  const theme = useContext(ThemeContext);

  console.log("id", id);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("now I am in focus");
    },
  }));

  return (
    <div>
      <div className="my-button"></div>
      <Button
        ref={buttonRef}
        style={{
          color: theme.textColor,
          backgroundColor: theme.backgroundColor,
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default forwardRef(ThemedButton);
