import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { getCountryNames, getCities } from 'full-countries-cities';

const renderOptions = list => {
  const { Option } = Select;

  return list.map(item => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ));
};

const dropDownFilter = (input, option) =>
  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

const CountryOrCity = ({
  value,
  handleStateChange,
  options: { type, countrySelected = '' },
}) => {
  let data;
  if (type === 'city') {
    data = countrySelected ? getCities(countrySelected) : [];
  }
  if (type === 'country') {
    data = getCountryNames();
  }
  return (
    <Select
      className="ant-select-country country-w-city"
      showSearch
      placeholder="Select"
      optionFilterProp="children"
      value={value}
      onChange={newValue => handleStateChange(newValue)}
      filterOption={dropDownFilter}
    >
      {renderOptions(data)}
    </Select>
  );
};

CountryOrCity.propTypes = {
  value: PropTypes.string.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    countrySelected: PropTypes.string,
  }).isRequired,
};

export default CountryOrCity;
