import { Button } from "antd";
import { useContext } from "react";

import { ThemeContext } from "../../Todo";

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      style={{
        color: theme.textColor,
        backgroundColor: theme.backgroundColor,
      }}
    >
      Click me!
    </Button>
  );
};

export default ThemedButton;
