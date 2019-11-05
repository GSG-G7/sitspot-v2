import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';

import data from '../../staticDataSet/keywords';
import Button from '../Button';

import './index.css';

const KeywordList = ({ keywords, toggleSelectKeyword, toggleKeywordList }) => (
  <div className="keywords">
    <div className="keywords__close">
      <Icon type="close" onClick={toggleKeywordList} />
    </div>
    <h2 className="keywords__title">Keywords</h2>
    <div className="keywords__list">
      {Object.keys(data).map(key => (
        <Button
          key={key}
          onClick={() => toggleSelectKeyword(key)}
          className={
            keywords.indexOf(key) !== -1
              ? 'keywords__list--item active-btn'
              : 'keywords__list--item'
          }
        >
          {data[key].text}
        </Button>
      ))}
    </div>
  </div>
);

KeywordList.propTypes = {
  keywords: propTypes.arrayOf(propTypes.string).isRequired,
  toggleSelectKeyword: propTypes.func.isRequired,
  toggleKeywordList: propTypes.func.isRequired,
};

export default KeywordList;
