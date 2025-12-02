import React, { useState, useEffect } from "react";
import { Switch, Dropdown, Space, Avatar } from "antd";
import logo from "../Assets/Logo_transparent.png";

import {
  MenuOutlined,
  CloseOutlined,
  SunOutlined,
  MoonOutlined,
  UserOutlined,
  LoginOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";  // ✅ import auth

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();   // ✅ get user + logout from context
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/courses", label: "Courses" },
    { key: "/about", label: "About" },
    { key: "/mock", label: "Mock" },
    { key: "/contact", label: "Contact" },
  ];

  // Auth dropdown items
  const userItems = [
    {
      key: "1",
      label: <Link to="/profile">Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="/settings">Settings</Link>,
    },
    {
      key: "3",
      label: (
        <span onClick={logout}>
          Logout
        </span>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkMode
            ? "bg-[#1A0033]/90 backdrop-blur-xl border-b border-purple-500/30"
            : "bg-white/90 backdrop-blur-xl border-b border-purple-200/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-55 h-12 flex items-center space-x-2">
              <div className="w-55 h-12">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.key}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    location.pathname === item.key
                      ? isDarkMode
                        ? "text-purple-400"
                        : "text-violet-600"
                      : isDarkMode
                      ? "text-gray-300 hover:text-purple-400"
                      : "text-gray-700 hover:text-violet-600"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.key && (
                    <motion.span
                      layoutId="activeNavItem"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-purple-700"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <Dropdown menu={{ items: userItems }} placement="bottomRight">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Space className="cursor-pointer">
                    <Avatar
                      size="default"
                      src={user.image} // ✅ show user profile picture if available
                      className={`transition-all ${
                        isDarkMode
                          ? "bg-purple-600 hover:bg-purple-500"
                          : "bg-violet-500 hover:bg-violet-400"
                      }`}
                      icon={!user.image && <UserOutlined />}
                    />
                  </Space>
                </motion.div>
              </Dropdown>
            ) : (
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      isDarkMode
                        ? "text-purple-300 hover:text-white hover:bg-purple-500/20 border border-purple-500/50"
                        : "text-violet-600 hover:text-white hover:bg-violet-500 border border-violet-300"
                    }`}
                  >
                    <LoginOutlined /> Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/register"
                    className="px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white hover:from-violet-500 hover:to-purple-600"
                  >
                    <FormOutlined /> Register
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
                className={isDarkMode ? "bg-purple-600" : "bg-violet-400"}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                size="small"
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
              />
            </motion.div>
            {user && (
              <Dropdown menu={{ items: userItems }} placement="bottomRight">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Space className="cursor-pointer">
                    <Avatar
                      size="default"
                      src={user.image}
                      className={`transition-all ${
                        isDarkMode
                          ? "bg-purple-600 hover:bg-purple-500"
                          : "bg-violet-500 hover:bg-violet-400"
                      }`}
                      icon={!user.image && <UserOutlined />}
                    />
                  </Space>
                </motion.div>
              </Dropdown>
            )}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
                  : "text-gray-700 hover:text-violet-600 hover:bg-violet-100/50"
              }`}
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${
              isDarkMode
                ? "bg-[#1A0033]/95 backdrop-blur-xl border-t border-purple-500/30"
                : "bg-white/95 backdrop-blur-xl border-t border-purple-200/30"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.key}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.key}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.key
                        ? isDarkMode
                          ? "text-purple-400 bg-purple-500/10"
                          : "text-violet-600 bg-violet-100/50"
                        : isDarkMode
                        ? "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
                        : "text-gray-700 hover:text-violet-600 hover:bg-violet-100/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {!user && (
                <>
                  <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/login"
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                        isDarkMode
                          ? "text-purple-300 hover:text-white hover:bg-purple-500/20 border border-purple-500/50"
                          : "text-violet-600 hover:text-white hover:bg-violet-500 border border-violet-300"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LoginOutlined /> Login
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/register"
                      className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white hover:from-violet-500 hover:to-purple-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FormOutlined /> Register
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
