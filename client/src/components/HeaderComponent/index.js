import React from 'react';
import logo from '../../assets/images/logo.svg';
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
            <img alt="logo" src={logo} />
            <button
              className="burger"
              type="button"
              onClick={this.onClickHandler}
            >
              <div />
              <div />
              <div />
            </button>
          </header>
          <p>Hello</p>
        </div>
      );
    }

    return (
      <div>
        <header>
          <img alt="logo" src={logo} />
          <button
            className="burger"
            type="button"
            onClick={this.onClickHandler}
          >
            <div />
            <div />
            <div />
          </button>
        </header>
      </div>
    );
  }
}
