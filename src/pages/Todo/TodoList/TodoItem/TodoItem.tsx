import { FC } from "react";
import { Button, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";

type TodoItemProps = {
  item: String;
};

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <List.Item>
      <div>{item}</div>
      <Button icon={<CloseOutlined />} shape="circle" size="small" danger />
    </List.Item>
  );
};

export default TodoItem;
