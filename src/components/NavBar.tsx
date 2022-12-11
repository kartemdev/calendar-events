/* eslint-disable arrow-body-style */
import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes';
import image from '../static/logo-nav.png';

const NavBar: FC = () => {
  const navigate = useNavigate();

  const { logout, setModalVisible } = useActions();

  const { isAuth, user } = useTypedSelector((store) => store.auth);

  return (
    <Layout.Header style={{ height: 50 }}>
      {isAuth ? (
        <div className="nav">
          <img
            src={`.${image}`}
            alt="logo-nav"
            style={{ height: 30, width: 110 }}
          />
          <Menu
            mode="horizontal"
            theme="dark"
            selectable={false}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: 50,
              width: 350,
            }}
            items={[
              { key: 1, label: user.username, disabled: true },
              {
                key: 2,
                label: 'Добваить событие',
                onClick: () => setModalVisible(true),
              },
              { key: 3, label: 'Выйти', onClick: () => logout() },
            ]}
          ></Menu>
        </div>
      ) : (
        <div className="nav">
          <img
            src={`.${image}`}
            alt="logo-nav"
            className="logo-nav"
            onClick={() => navigate(RouteNames.MAIN)}
          />
          <Menu
            mode="horizontal"
            theme="dark"
            selectable={false}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: 50,
            }}
            items={[
              {
                key: 1,
                label: 'Войти',
                onClick: () => navigate(RouteNames.LOGIN),
              },
            ]}
          ></Menu>
        </div>
      )}
    </Layout.Header>
  );
};

export default NavBar;
