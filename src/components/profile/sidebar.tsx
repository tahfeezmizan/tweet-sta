"use client";

import {
  CreditCard,
  HelpCircle,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { icon: User, label: "Profile", href: "#profile" },
    { icon: ShoppingBag, label: "Order", href: "#order" },
    { icon: CreditCard, label: "StampCard", href: "#stampcard" },
    { icon: HelpCircle, label: "Help", href: "#help" },
    { icon: Settings, label: "Setting", href: "#setting" },
    { icon: LogOut, label: "Log Out", href: "#logout" },
  ];

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        className={`
          fixed left-0 top-0 h-full bg-white shadow-2xl z-40
          transition-transform duration-300 ease-in-out
          w-80 lg:w-full mx-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:shadow-none
          ${className}
        `}
      >
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-6 text-white h-48">
          <div className="flex flex-col items-center space-y-4 mt-28">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Mark Jecno"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-center ">
              <h3 className="text-lg font-poppins font-medium text-black">
                Mark Jecno
              </h3>
              <p className="text-[#747474] text-sm font-poppins">
                mark-jecno@gmail.com
              </p>
            </div>
          </div>
        </div>

        <nav className="py-6 mt-28 font-poppins">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:border-r-4 hover:border-orange-500 transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
