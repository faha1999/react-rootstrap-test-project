import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// icons
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <FaHome />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <FaUser />,
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <MdMessage />,
  },
];

export const Sidebar = ({ children }) => {
  return (
    <div className="mainContainer">
      <motion.div animate={{ width: '200px' }} className="sidebar">
        <div className="top-section">
          <h1 className="logo">faha1999</h1>

          <div className="bars">
            <FaBars />
          </div>
        </div>

        <div className="search">
          <div className="search-icon">
            <BiSearch />
          </div>
          <input placeholder="Search..." />
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">{route.icon}</div>
              <div className="title">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
