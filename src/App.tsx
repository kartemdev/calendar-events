import { Layout, Row } from 'antd';
import { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/iUser';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
        }}
      >
        <p>Event Calendar ©2022 Created by kartemdev</p>
        <div style={{ marginLeft: 30 }}>
          <a
            href="https://github.com/kartemdev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
              alt="guthub"
              style={{ height: 30, width: 30 }}
            />
          </a>
          <a
            href="https://t.me/kartemdev"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 10 }}
          >
            <img
              src="https://www.vectorlogo.zone/logos/telegram/telegram-tile.svg"
              alt="guthub"
              style={{ height: 30, width: 30 }}
            />
          </a>
        </div>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
