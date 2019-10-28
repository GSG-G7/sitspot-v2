import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';

import keywordsData from './fakeData';
import Button from '../Button';

import './index.css';

const Keywords = ({ keyword, setKeyword }) => (
  <div className="keywords">
    <Icon className="keywords__close" type="close" />
    <h2 className="keywords__title">Keywords</h2>
    <div className="keywords__list">
      {keywordsData.map((el, index) => {
        return (
          <Button
            key={`keyword${index + 1}`}
            onClick={() => setKeyword(el.value)}
            className={
              el.value === keyword
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

Keywords.propTypes = {
  keyword: propTypes.string.isRequired,
  setKeyword: propTypes.func.isRequired,
};

export default Keywords;
