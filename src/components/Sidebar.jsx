import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

// icons
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import { MdMessage, MdWork } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <FaHome />,
    id: 'home',
  },
  {
    path: '/about',
    name: 'About',
    icon: <FaUser />,
    id: 'about',
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <MdMessage />,
    id: 'contact',
  },
  {
    path: '/filterWork',
    name: 'Contact',
    icon: <MdWork />,
    id: 'filterWork',
  },
];

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mainContainer">
      <motion.aside
        animate={{
          width: isOpen ? '200px' : '45px',

          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 10,
          },
        }}
        className="sidebar"
      >
        <div className="top-section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                faha1999
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className="search">
          <div className="search-icon">
            <BiSearch />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                placeholder="Search..."
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <Link
              activeClass="active"
              to={route.id}
              key={route.name}
              className="link"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="title"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </section>
      </motion.aside>
      <motion.main
        animate={{
          paddingLeft: isOpen ? '210px' : '55px',

          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 10,
          },
        }}
      >
        {children}
      </motion.main>
    </div>
  );
};
