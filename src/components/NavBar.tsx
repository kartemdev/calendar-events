/* eslint-disable arrow-body-style */
import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();

  const { isAuth, user } = useTypedSelector((store) => store.auth);
  return (
    <Layout.Header>
      {isAuth ? (
        <>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            items={[
              { key: 1, label: user.username, disabled: true },
              { key: 2, label: 'Выйти', onClick: () => logout() },
            ]}
          ></Menu>
        </>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          items={[
            {
              key: 1,
              label: 'Войти',
              onClick: () => navigate(RouteNames.LOGIN),
            },
          ]}
        ></Menu>
      )}
    </Layout.Header>
  );
};

export default NavBar;
