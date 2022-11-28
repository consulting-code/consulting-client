import { Button, Col, Input, Row } from "antd";
import { ChangeEvent, FC, useState } from "react";

type AddTodoItemProps = {
  addNewItem: (title: string) => void;
};

const AddTodoItem: FC<AddTodoItemProps> = ({ addNewItem }) => {
  const [title, setTitle] = useState("");

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onAddNewItemClick = () => {
    addNewItem(title);
    setTitle("");
  };

  return (
    <Row style={{ padding: 20 }} justify="space-between" gutter={[10, 10]}>
      <Col flex="auto">
        <Input
          value={title}
          placeholder="What are we going to do"
          onChange={onTitleChange}
        />
      </Col>
      <Col>
        <Button onClick={onAddNewItemClick}>Add</Button>
      </Col>
    </Row>
  );
};

export default AddTodoItem;
