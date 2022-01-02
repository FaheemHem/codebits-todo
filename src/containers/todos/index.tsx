import React from 'react';
import { Row, Col, Card, PageHeader, Button } from 'antd';

import { ITodo } from 'store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodoStatus } from 'store/todo/actions';
import { RootState } from 'store/todo/reducers';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import './styles.less';
import { useHistory } from 'react-router';

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = () => {
    history.push("/create")
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleEditTodo = (todo: ITodo): void => {
    history.push({ 
      pathname: '/edit',
      state: todo
     });
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
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
          title="Add Todo"
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
          <Row>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" block onClick = {handleFormSubmit}>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
        </Row>
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos?todos: []}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
            onTodoEdit = {handleEditTodo}
          />
        </Card>
      </Col>
    </Row>
  );
};
