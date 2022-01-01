import React from 'react';
import { Row, Col, Card, PageHeader } from 'antd';

import { ITodo } from 'store/todo/models/todo.model';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todo/actions';
import { AddTodoForm } from 'components/AddTodoForm';
import { message } from 'antd';

import '../../containers/todos/styles.less';
import { useHistory } from 'react-router';

interface ITodosContainerProps {}

export const CreateTodo: React.FunctionComponent<ITodosContainerProps> = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
    history.push("/")
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add To-do"
          subTitle=""
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
    </Row>
  );
};
