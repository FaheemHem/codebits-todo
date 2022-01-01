import React, {useEffect, useState} from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { useLocation, useHistory } from "react-router-dom";

import './styles.less';
import { ITodo } from 'store/todo/models/todo.model';

interface IEditTodoFormProps {
  onFormSubmit: (todo: ITodo) => void;
}

export const EditTodoForm: React.FC<IEditTodoFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();
  const { state } = useLocation<any>();
  const history = useHistory();
  useEffect(() => {
    if(state && state.name){
    form.setFieldsValue({ name: state.name });
    }else{
      history.push("/")
    }
 }, [state]);

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name'),
      id: state.id
    });

    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input placeholder="What needs to be done?"/>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            Edit todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
