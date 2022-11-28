import { Card } from "antd";

import AddTodoItem from "./AddTodoItem/AddTodoItem";
import TodoList from "./TodoList/TodoList";
import { useCallback, useState } from "react";
import { ITodoItem } from "./types";

const initTodoList: ITodoItem[] = [
  {
    id: Math.random(),
    title: "Learn React",
    isCompleted: false,
    description:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: Math.random(),
    title: "Learn Vue",
    isCompleted: true,
    description:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: Math.random(),
    title: "Learn Node",
    isCompleted: false,
    description:
      "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const Todo = () => {
  const [todoList, setTodoList] = useState(initTodoList);

  const addNewItem = (title: string) => {
    const newItem: ITodoItem = {
      id: Math.random(),
      isCompleted: false,
      description: "",
      title,
    };
    const updatedItems = todoList.concat(newItem);
    setTodoList(updatedItems);
  };

  const changeItemCompleteness = useCallback((targetId: number) => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });
    });
  }, []);

  const deleteItem = useCallback((targetId: number) => {
    setTodoList((prevState) => {
      return prevState.filter((item) => item.id !== targetId);
    });
  }, []);

  return (
    <Card bodyStyle={{ padding: 0, width: 400 }}>
      <AddTodoItem addNewItem={addNewItem} />
      <TodoList
        list={todoList}
        deleteItem={deleteItem}
        changeItemCompleteness={changeItemCompleteness}
      />
    </Card>
  );
};

export default Todo;
