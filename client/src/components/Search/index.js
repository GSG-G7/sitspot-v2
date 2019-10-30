import React, { Component } from 'react';
import { Select, Radio, Button } from 'antd';
import world from 'full-countries-cities';

import Keywords from '../Keywords';

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

  lookingFor = { STAY: 'stay', EAT: 'eat', SHOP: 'shop' };

  renderOptions = list =>
    list.map(item => (
      <Option key={item} value={item}>
        {item}
      </Option>
    ));

  onSubmit = () => {};

  setKeyword = value => {
    this.setState({ keyword: value, viewKeywords: false });
  };

  toggleKeywordList = () => {
    this.setState(state => ({ viewKeywords: !state.viewKeywords }));
  };

  dropdownFilter = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  render() {
    const { country, city, keyword, viewKeywords, lookingFor } = this.state;

    const { EAT, SHOP, STAY } = this.lookingFor;
    const cities = country ? world.getCities(country) : undefined;

    return (
      <form className="search__form">
        <div className="country-city-container">
          <div className="autocomplete-box">
            <div>WHICH COUNTRY?</div>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              value={country}
              onChange={value => this.setState({ country: value, city: '' })}
              filterOption={this.dropdownFilter}
            >
              {this.renderOptions(world.getCountryNames())}
            </Select>
          </div>
          <div className="autocomplete-box">
            <div>WHICH CITY?</div>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              value={city}
              onChange={value => this.setState({ city: value })}
              filterOption={this.dropdownFilter}
            >
              {country && cities !== undefined && this.renderOptions(cities)}
            </Select>
          </div>
        </div>

        <div className="type-filter__container">
          <Radio.Group
            className="radio-group"
            value={lookingFor}
            buttonStyle="solid"
          >
            <p className="button-label">What Are You Looking For</p>
            <Radio.Button
              className="radio-button"
              value={STAY}
              onClick={() => this.setState({ lookingFor: STAY })}
            >
              Stay
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              value={EAT}
              onClick={() => this.setState({ lookingFor: EAT })}
            >
              Eat & drink
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              value={SHOP}
              onClick={() => this.setState({ lookingFor: SHOP })}
            >
              Shop
            </Radio.Button>
          </Radio.Group>
          <div className="type-filter__container__filter">
            <p className="button-label">Filter</p>
            <Button className="keywords-btn" onClick={this.toggleKeywordList}>
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
          <Keywords
            keyword={keyword}
            setKeyword={this.setKeyword}
            toggleKeywordList={this.toggleKeywordList}
          />
        )}
      </form>
    );
  }
}

export default Search;
