import React from 'react';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/index';
import './style.css';

export default class Header extends React.Component {
  state = {
    menuIsShown: false,
  };

  onClickHandler = () => {
    return this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown,
    }));
  };

  render() {
    const { menuIsShown } = this.state;
    if (menuIsShown) {
      return (
        <div>
          <header>
            <div className="logo">
              <img alt="logo" src={logo} className="image" />
            </div>
            <Button className="burger" onClick={this.onClickHandler}>
              <div />
              <div />
              <div />
            </Button>
          </header>
          <p>Hello</p>
        </div>
      );
    }

    return (
      <div>
        <header>
          <div className="logo">
            <img alt="logo" src={logo} className="image" />
          </div>
          <Button className="burger" onClick={this.onClickHandler}>
            <div />
            <div />
            <div />
          </Button>
        </header>
      </div>
    );
  }
}
