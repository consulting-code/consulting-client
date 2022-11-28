import { List } from "antd";

import { ITodoItem } from "../types";

import TodoItem from "./TodoItem/TodoItem";
import { FC } from "react";

type TodoListProps = {
  list: ITodoItem[];
  deleteItem: (id: number) => void;
  changeItemCompleteness: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({
  list,
  deleteItem,
  changeItemCompleteness,
}) => (
  <List
    dataSource={list}
    renderItem={(item) => (
      <TodoItem
        item={item}
        deleteItem={deleteItem}
        changeItemCompleteness={changeItemCompleteness}
      />
    )}
  />
);

export default TodoList;
