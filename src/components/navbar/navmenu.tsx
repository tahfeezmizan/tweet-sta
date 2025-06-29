"use client";

import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";

import Image from "next/image";
import logo from "../../asstes/logo.png";

export default function NavMenu() {
  const avatarMenuItems: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
      onClick: () => {
        console.log("Profile clicked");
      },
    },
  ];

  return (
    <div className="bg-white border-b border-gray-100 ">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="w-24"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Dropdown
            menu={{ items: avatarMenuItems }}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <Avatar
              size={55}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              className="cursor-pointer border-2 border-[#F1874F] rounded-full overflow-hidden hover:border-orange-400 transition-colors"
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
