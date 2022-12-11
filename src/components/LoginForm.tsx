import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  const { login } = useActions();

  const { error, isLoading } = useTypedSelector((store) => store.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя пользователя')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль')]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
