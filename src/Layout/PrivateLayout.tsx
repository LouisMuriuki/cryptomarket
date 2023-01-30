import React, { useState } from "react";
import {
  PieChartOutlined,
  TeamOutlined,
  PoweroffOutlined,
  UserOutlined,
  BellOutlined,
  ScheduleOutlined,
  PlusOutlined,
  DeliveredProcedureOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import { Avatar, Badge, Button,Space, Typography } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css"
const { Header, Content, Sider } = Layout;
const { Title } = Typography;


interface MenuItem {
  title: string;
  key: string;
  icon?: React.ReactNode;
  to?: string;
  children?: MenuItem[];
}

const { SubMenu } = Menu;

function getItem(
  title: string,
  key: string,
  icon?: React.ReactNode,
  to?: string,
  children?: MenuItem[]
) {
  return { title, key,to, icon, children };
}

const items: MenuItem[] = [
  getItem("DashBoard", "1", <PieChartOutlined   style={{ fontSize: "16px"}}/>, "/dashboard"),
  getItem("Staff", "sub1", <TeamOutlined  style={{ fontSize: "16px"}}/>, undefined, [
    getItem("Manage", "2", <UsergroupAddOutlined />, "/staff/"),
    getItem("Reports", "3", <DeliveredProcedureOutlined  style={{ fontSize: "16px"}}/>, "/staff/reports"),
  ]),
  getItem("Meetings", "sub2", <ScheduleOutlined  style={{ fontSize: "16px"}}/>, undefined, [
    getItem("View", "6", undefined, "/meetings/"),
    getItem("Reports", "7", <DeliveredProcedureOutlined style={{ fontSize: "16px"}}/>, "/meetings/reports"),
  ]),
  getItem("Profile", "8", < UserOutlined style={{ fontSize: "16px"}}/>, "/profile"),
  getItem("Logout", "9", <PoweroffOutlined  style={{ fontSize: "16px"}}/>),
];

const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        zeroWidthTriggerStyle={{ position: "absolute", top: 0, marginTop: 12 }}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "visible",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        >
          <Title level={4} style={{ color: "#FFF" }}>
            MGENI KARIBU
          </Title>
        </div>
        <Menu
          theme="dark"
          // defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ paddingTop: 10 }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      {item.icon}
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      {child.icon}
                      {child.to ? (
                        <Link  to={child.to}>{child.title}</Link>
                      ) : (
                        child.title
                      )}
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.key}>
                  {item.icon}
                  {item.to ? (
                    <Link to={item.to}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 0 : 200 }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-center",
            }}
          >
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ paddingRight: 20 }}>
              <Space size="large">
                <Button className="flex items-center justify-center" icon={<PlusOutlined />}>New Meeting</Button>
                <Badge dot>
                  <BellOutlined
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  />
                </Badge>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Space>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
