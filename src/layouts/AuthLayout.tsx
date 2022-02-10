import React from "react";
import styled from "styled-components";

import { Layout, Menu, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  const navigate = useNavigate();
  return (
    <AuthContainer>
      <Layout className="layout">
        <Header>
          <CustomMenu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Typography.Link onClick={() => navigate("/signup")}>
                Signup
              </Typography.Link>
            </Menu.Item>
            <Menu.Item>
              <Typography.Link onClick={() => navigate("/signin")}>
                Signin
              </Typography.Link>
            </Menu.Item>
          </CustomMenu>
        </Header>
        <Content style={{ padding: "0 50px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.background};
`;

const CustomMenu = styled(Menu)`
  display: flex;
  justify-content: flex-end;
`;

export default AuthLayout;
