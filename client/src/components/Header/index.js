import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg';
import Menu from '../Menu';
import Button from '../Button';
import './style.css';

export default class Header extends Component {
  state = {
    menuIsShown: false,
  };

  toggleMenu = () => {
    return this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown,
    }));
  };

  render() {
    const { menuIsShown } = this.state;

    return (
      <div>
        {menuIsShown && <Menu closeHandler={this.toggleMenu} />}
        <header className="nav_header">
          <div className="header_container-img">
            <img alt="logo" src={logo} className="header_container-img_logo" />
          </div>
          <Button className="header_menu-button" onClick={this.toggleMenu}>
            <div className="header_menu-button_div" />
            <div className="header_menu-button_div header_menu-button_div--middle" />
            <div className="header_menu-button_div" />
          </Button>
        </header>
      </div>
    );
  }
}
