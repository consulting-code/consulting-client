import { FC } from "react";
import { Button, Checkbox, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { ITodoItem } from "../../types";

type TodoItemProps = {
  item: ITodoItem;
  deleteItem: (id: number) => void;
  changeItemCompleteness: (id: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({
  item,
  deleteItem,
  changeItemCompleteness,
}) => {
  const onDeleteItemClick = () => {
    deleteItem(item.id);
  };

  const onItemCompletenessChange = () => {
    changeItemCompleteness(item.id);
  };

  return (
    <List.Item>
      <Checkbox
        checked={item.isCompleted}
        onChange={onItemCompletenessChange}
      />
      <div>{item.title}</div>
      <Button
        icon={<CloseOutlined />}
        shape="circle"
        size="small"
        danger
        onClick={onDeleteItemClick}
      />
    </List.Item>
  );
};

export default TodoItem;
