"use client";

import React from "react";
import { Layout, Menu, Avatar, Typography } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Text } = Typography;

export default function Sidebar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        minHeight: "calc(100vh - 100px)",
        backgroundColor: "#fff",
        minWidth: "600px",
        width: "600px", 
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          background: "linear-gradient(to bottom, #f97316, #facc15)",
        }}
      >
        <Avatar
          size={100}
          src="https://randomuser.me/api/portraits/women/44.jpg"
          style={{ marginBottom: "10px" }}
        />
        <div style={{ color: "white", fontWeight: "bold" }}>Mark Jecno</div>
        <Text style={{ color: "white", fontSize: "12px" }}>
          mark-jecno@gmail.com
        </Text>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Profile",
          },
          {
            key: "2",
            icon: <FileTextOutlined />,
            label: "Order",
          },
          {
            key: "3",
            icon: <GiftOutlined />,
            label: "StampCard",
          },
          {
            key: "4",
            icon: <QuestionCircleOutlined />,
            label: "Help",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Setting",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Log Out",
          },
        ]}
      />
    </Sider>
  );
}
