import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import keywordsData from './fakeData';
import './index.css';

class Keywords extends Component {
  state = {
    value: null,
  };

  handleKeywordChange = keywords => {
    this.setState({ value: keywords.value });
    // this function will passed in this component to take a value
    const { getKeyword } = this.props;
    getKeyword(keywords.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="keywords">
        <Icon className="keywords__close" type="close" />
        <h2 className="keywords__title">Keywords</h2>
        <div className="keywords__list">
          <div className="keywords__list__left">
            {keywordsData
              .slice(0, keywordsData.length / 2 + 1)
              .map((el, index) => {
                return (
                  <button
                    key={`keyword${index + 1}`}
                    className={
                      value && el.value === value
                        ? 'keywords__list--item active-btn'
                        : 'keywords__list--item'
                    }
                    value={el.value}
                    type="button"
                    onClick={btn => this.handleKeywordChange(btn.target)}
                  >
                    {el.text}
                  </button>
                );
              })}
          </div>
          <div className="keywords__list__right">
            {keywordsData
              .slice(keywordsData.length / 2 + 1, keywordsData.length)
              .map((el, index) => {
                return (
                  <button
                    key={`keyword${index + 1}`}
                    className={
                      value && el.value === value
                        ? 'keywords__list--item active-btn'
                        : 'keywords__list--item'
                    }
                    value={el.value}
                    type="button"
                    onClick={btn => this.handleKeywordChange(btn.target)}
                  >
                    {el.text}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

Keywords.propTypes = {
  getKeyword: propTypes.func.isRequired,
};

export default Keywords;
