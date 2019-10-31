import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, Radio, Button } from 'antd';
import { getCountryNames, getCities } from 'full-countries-cities';

import KeywordList from '../KeywordList';

import './style.css';

const { Option } = Select;

class Search extends Component {
  state = {
    country: undefined,
    city: undefined,
    lookingFor: '',
    keyword: '',
    viewKeywords: false,
  };

  LookingFor = Object.freeze({ STAY: 'stay', EAT: 'eat', SHOP: 'shop' });

  renderOptions = list =>
    list.map(item => (
      <Option key={item} value={item}>
        {item}
      </Option>
    ));

  onSubmit = () => {};

  setKeyword = value => this.setState({ keyword: value, viewKeywords: false });

  toggleKeywordList = () =>
    this.setState(state => ({ viewKeywords: !state.viewKeywords }));

  dropDownFilter = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  handleRadioButton = e => this.setState({ lookingFor: e.target.value });

  render() {
    const { country, city, keyword, viewKeywords, lookingFor } = this.state;
    const { fontColor } = this.props;

    const { EAT, SHOP, STAY } = this.LookingFor;
    const cities = country ? getCities(country) : [];

    return (
      <form className="search__form" style={{ color: fontColor }}>
        <div className="country-city-container">
          <div className="autocomplete-box">
            <div>WHICH COUNTRY?</div>
            <Select
              className="ant-select-country"
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              value={country}
              onChange={value => this.setState({ country: value, city: '' })}
              filterOption={this.dropDownFilter}
            >
              {this.renderOptions(getCountryNames())}
            </Select>
          </div>
          <div className="autocomplete-box">
            <div>WHICH CITY?</div>
            <Select
              id="ant-select-city"
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              value={city}
              onChange={value => this.setState({ city: value })}
              filterOption={this.dropDownFilter}
            >
              {cities && this.renderOptions(cities)}
            </Select>
          </div>
        </div>

        <div className="type-filter__container">
          <Radio.Group
            className="radio-group"
            value={lookingFor}
            buttonStyle="solid"
          >
            <p style={{ color: fontColor }} className="button-label">
              What Are You Looking For
            </p>
            <Radio.Button
              className="radio-button"
              value={STAY}
              onClick={this.handleRadioButton}
            >
              Stay
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              value={EAT}
              onClick={this.handleRadioButton}
            >
              Eat & drink
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              value={SHOP}
              onClick={this.handleRadioButton}
            >
              Shop
            </Radio.Button>
          </Radio.Group>
          <div className="type-filter__container__filter">
            <p className="button-label">Filter</p>
            <Button id="keywords-btn" onClick={this.toggleKeywordList}>
              KeyWords
            </Button>
          </div>
        </div>
        <div className="form-action">
          <Button id="search-btn" onClick={this.onSubmit}>
            Search
          </Button>
          <Button id="recommendation-btn" onClick={() => {}}>
            + Add your recommendation
          </Button>
        </div>
        {viewKeywords && (
          <KeywordList
            keyword={keyword}
            setKeyword={this.setKeyword}
            toggleKeywordList={this.toggleKeywordList}
          />
        )}
      </form>
    );
  }
}

Search.propTypes = {
  fontColor: PropTypes.string.isRequired,
};

export default Search;
