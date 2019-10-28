import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import keywordsData from './fakeData';
import Button from '../Button';
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
          {keywordsData.map((el, index) => {
            return (
              <Button
                key={`keyword${index + 1}`}
                onClick={btn => this.handleKeywordChange(btn.target)}
                value={el.value}
                className={
                  value && el.value === value
                    ? 'keywords__list--item active-btn'
                    : 'keywords__list--item'
                }
              >
                {el.text}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

Keywords.propTypes = {
  getKeyword: propTypes.func.isRequired,
};

export default Keywords;
