import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import Button from '../Button';

import logo from '../../assets/images/logo.svg';
import './style.css';

export default class Header extends Component {
  state = {
    menuIsShown: false,
  };

  toggleMenu = () =>
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown,
    }));

  render() {
    const { menuIsShown } = this.state;

    return (
      <header>
        {menuIsShown && <Menu closeHandler={this.toggleMenu} />}
        <div className="nav__header">
          <Link to="/">
            <div className="header__div__img-container">
              <img
                alt="logo"
                src={logo}
                className="header__div__img-container__logo"
              />
            </div>
          </Link>
          <Button className="header__button" onClick={this.toggleMenu}>
            <div className="header__button__div" />
            <div className="header__button__div header__button__div--middle" />
            <div className="header__button__div" />
          </Button>
        </div>
      </header>
    );
  }
}
