import { Button, Col, Input, Row } from "antd";

const AddTodoItem = () => {
  return (
    <Row style={{ padding: 20 }} justify="space-between" gutter={[10, 10]}>
      <Col flex="auto">
        <Input placeholder="What are we going to do" />
      </Col>
      <Col>
        <Button>Add</Button>
      </Col>
    </Row>
  );
};

export default AddTodoItem;
