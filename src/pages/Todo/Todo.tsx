import { createContext, useCallback, useState } from "react";
import { Card, Switch } from "antd";

import { IColors, IThemes, ITodoItem } from "./types";
import AddTodoItem from "./AddTodoItem/AddTodoItem";
import TodoList from "./TodoList/TodoList";
import Counter from "./Counter/Counter";

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

const themes: IThemes = {
  light: {
    textColor: "#000000",
    backgroundColor: "#eeeeee",
  },
  dark: {
    textColor: "#ffffff",
    backgroundColor: "#222222",
  },
};

export const ThemeContext = createContext<IColors>(themes.light);

const Todo = () => {
  const [todoList, setTodoList] = useState(initTodoList);
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState(themes.light);

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

  const onThemeChange = (value: boolean) => {
    setIsChecked(value);
    setTheme(value ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Card bodyStyle={{ padding: 0, width: 400 }}>
        <Switch
          checked={isChecked}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          onChange={onThemeChange}
        />
        <AddTodoItem addNewItem={addNewItem} />
        <TodoList
          list={todoList}
          deleteItem={deleteItem}
          changeItemCompleteness={changeItemCompleteness}
        />
        <Counter />
      </Card>
    </ThemeContext.Provider>
  );
};

export default Todo;
