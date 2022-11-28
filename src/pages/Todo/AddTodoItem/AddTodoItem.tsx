import { Button, Col, Input, InputRef, Row } from "antd";
import {
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";

type AddTodoItemProps = {
  addNewItem: (title: string) => void;
};

const AddTodoItem: FC<AddTodoItemProps> = ({ addNewItem }) => {
  const [title, setTitle] = useState("");
  const titleInput = useRef<InputRef>(null);

  useEffect(() => {
    titleInput.current?.focus();
  }, []);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onAddNewItemClick = () => {
    addNewItem(title);
    setTitle("");
  };

  const onAddNewItemKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      addNewItem(title);
      setTitle("");
    }
  };

  return (
    <Row style={{ padding: 20 }} justify="space-between" gutter={[10, 10]}>
      <Col flex="auto">
        <Input
          ref={titleInput}
          value={title}
          placeholder="What are we going to do"
          onChange={onTitleChange}
          onKeyDown={onAddNewItemKeyDown}
        />
      </Col>
      <Col>
        <Button onClick={onAddNewItemClick}>Add</Button>
      </Col>
    </Row>
  );
};

export default AddTodoItem;
