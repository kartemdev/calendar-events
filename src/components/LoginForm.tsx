import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя пользователя!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
