import { List } from "antd";

import TodoItem from "./TodoItem/TodoItem";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const TodoList = () => (
  <List dataSource={data} renderItem={(item) => <TodoItem item={item} />} />
);

export default TodoList;
