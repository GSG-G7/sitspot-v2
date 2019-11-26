import React from 'react';

import { Select } from 'antd';

const { Option } = Select;
const renderOptions = list =>
  list.map(item => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ));

export default renderOptions;
