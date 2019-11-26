import React from 'react';
import PropTypes from 'prop-types';

import { Radio } from 'antd';

const BusinessTypes = Object.freeze({
  stay: 'place to stay',
  eat: 'place to eat or drink',
  shop: 'place to shop',
});

const TypeQuestion = ({ value, handleStateChange }) => (
  <div>
    <Radio.Group value={value} buttonStyle="solid">
      {Object.entries(BusinessTypes).map(([key, text]) => (
        <Radio.Button
          key={key}
          value={key}
          onClick={e => handleStateChange(e.target.value)}
        >
          {text}
        </Radio.Button>
      ))}
    </Radio.Group>
  </div>
);

TypeQuestion.propTypes = {
  value: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
};
export default TypeQuestion;
