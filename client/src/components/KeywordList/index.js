import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';

import keywords from '../../staticDataSet/keywords';
import Button from '../Button';

import './index.css';

const KeywordList = ({ keyword, setKeyword, toggleKeywordList }) => (
  <div className="keywords">
    <div className="keywords__close">
      <Icon type="close" onClick={toggleKeywordList} />
    </div>
    <h2 className="keywords__title">Keywords</h2>
    <div className="keywords__list">
      {Object.keys(keywords).map(key => (
        <Button
          key={key}
          onClick={() => setKeyword(key)}
          className={
            key === keyword
              ? 'keywords__list--item active-btn'
              : 'keywords__list--item'
          }
        >
          {keywords[key].text}
        </Button>
      ))}
    </div>
  </div>
);

KeywordList.propTypes = {
  keyword: propTypes.string.isRequired,
  setKeyword: propTypes.func.isRequired,
  toggleKeywordList: propTypes.func.isRequired,
};

export default KeywordList;
