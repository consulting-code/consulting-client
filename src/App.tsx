import { Card, Row } from "antd";

import AddTodoItem from "./pages/Todo/AddTodoItem/AddTodoItem";
import TodoList from "./pages/Todo/TodoList/TodoList";

const App = () => (
  <Row justify="center">
    <Card bodyStyle={{ padding: 0, width: 400 }}>
      <AddTodoItem />
      <TodoList />
    </Card>
  </Row>
);

export default App;
