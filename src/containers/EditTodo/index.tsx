import React from 'react';
import { Row, Col, Card, PageHeader } from 'antd';

import { ITodo } from 'store/todo/models/todo.model';
import { useDispatch } from 'react-redux';
import { editTodo } from 'store/todo/actions';
import { message } from 'antd';

import '../../containers/todos/styles.less';
import { useHistory } from 'react-router';
import { EditTodoForm } from 'components/EditTodoForm';

interface ITodosContainerProps {}

export const EditTodo: React.FunctionComponent<ITodosContainerProps> = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(editTodo(todo));
    message.success('Todo edited!');
    history.push("/");
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
          title="Edit To-do"
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
        <Card title="Edit todo">
          <EditTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
    </Row>
  );
};
