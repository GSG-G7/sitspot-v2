import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Icon } from 'antd';
import './index.css';

const Menu = () => {
  return (
    <BrowserRouter>
      <div className="menu">
        <ul className="menu__list">
          <li>
            <NavLink className="menu__list__item" to="/review">
              Add your recommendation
            </NavLink>
            <Icon className="menu__list__close" type="close" />
          </li>
          <li>
            <NavLink className="menu__list__item" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__list__item" to="/about-us">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__list__item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default Menu;
