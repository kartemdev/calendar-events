/* eslint-disable arrow-body-style */
import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";

const NavBar: FC = () => {
  const navigate = useNavigate();

  const { isAuth } = useTypedSelector((store) => store.auth)
  return (
    <Layout.Header>
      {isAuth ? (
        <>
          <div>Артём</div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ display: "flex", justifyContent: "flex-end" }}
            items={[
              { key: 1, label: "Выйти", onClick: () => console.log("logout") },
            ]}
          ></Menu>
        </>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: "flex", justifyContent: "flex-end" }}
          items={[
            { key: 1, label: "Войти", onClick: () => navigate(RouteNames.LOGIN) },
          ]}
        ></Menu>
      )}
    </Layout.Header>
  );
};

export default NavBar;
