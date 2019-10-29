import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';

import keywordsData from '../../staticDataSet/keywords';
import Button from '../Button';

import './index.css';

const Keywords = ({ keyword, setKeyword }) => (
  <div className="keywords">
    <div className="keywords__close">
      <Icon type="close" />
    </div>
    <h2 className="keywords__title">Keywords</h2>
    <div className="keywords__list">
      {keywordsData.map(element => {
        return (
          <Button
            key={element.value}
            onClick={() => setKeyword(element.value)}
            className={
              element.value === keyword
                ? 'keywords__list--item active-btn'
                : 'keywords__list--item'
            }
          >
            {element.text}
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
