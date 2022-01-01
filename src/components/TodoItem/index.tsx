import React from 'react';
import { Tag, List, Button, Popconfirm, Checkbox } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import './styles.less';
import { ITodo } from 'store/todo/models/todo.model';

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
  onTodoEdit: (todo: ITodo) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
  onTodoEdit
}) => {

  return (
    <List.Item
      actions={[
         <EditOutlined onClick = {()=>{onTodoEdit(todo)}}/>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
      <Checkbox
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag" style = {{textDecoration: todo.completed?"line-through": "none"}}>
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
