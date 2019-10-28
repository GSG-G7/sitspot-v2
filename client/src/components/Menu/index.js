import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

import './index.css';

const routes = [
  { content: 'FAQ', path: '/faq' },
  { content: 'About us', path: '/about-us' },
  { content: 'Contact', path: '/contact' },
];

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li>
          <NavLink className="menu__list__item" to="/review">
            Add your recommendation
          </NavLink>
          <Icon className="menu__list__close" type="close" />
        </li>
        {routes.map(({ content, path }) => (
          <li key={path}>
            <NavLink className="menu__list__item" to={path}>
              {content}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
