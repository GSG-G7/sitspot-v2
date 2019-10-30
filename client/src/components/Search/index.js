import React, { Component } from 'react';
import { Select, Radio, Button } from 'antd';
import world from 'full-countries-cities';
import 'antd/dist/antd.css';

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

  lookingFor = {
    STAY: 'stay',
    EAT: 'eat',
    SHOP: 'shop',
  };

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

  hideKeyword = () => {
    this.setState(({ viewKeywords }) => ({ viewKeywords: !viewKeywords }));
  };

  dropdownFilter = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  render() {
    const { country, city, keyword, viewKeywords, lookingFor } = this.state;

    return (
      <form className="search__form">
        <div className="country-city-container">
          <div className="autocomplete-box">
            <div>WHICH COUNTRY?</div>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              onChange={value => this.setState({ country: value, city: '' })}
              value={country}
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
              onChange={value => {
                this.setState({ city: value });
              }}
              value={city}
              filterOption={this.dropdownFilter}
            >
              {country &&
                world.getCities(country) !== undefined &&
                this.renderOptions(world.getCities(country))}
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
              onClick={() =>
                this.setState({ lookingFor: this.lookingFor.STAY })
              }
            >
              Stay
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              onClick={() => this.setState({ lookingFor: this.lookingFor.EAT })}
            >
              Eat & drink
            </Radio.Button>
            <Radio.Button
              className="radio-button"
              onClick={() =>
                this.setState({ lookingFor: this.lookingFor.SHOP })
              }
            >
              Shop
            </Radio.Button>
          </Radio.Group>
          <div className="type-filter__container__filter">
            <p className="button-label">Filter</p>
            <Button
              className="keywords-btn"
              onClick={() => {
                this.setState(state => ({
                  viewKeywords: !state.viewKeywords,
                }));
              }}
            >
              KeyWords
            </Button>
          </div>
        </div>
        <div className="form-action">
          <Button className="search-btn" onClick={() => this.onSubmit()}>
            Search
          </Button>
          <Button className="recommendation-btn" onClick={() => {}}>
            + Add your recommendation
          </Button>
        </div>
        {viewKeywords ? (
          <Keywords
            keyword={keyword}
            setKeyword={this.setKeyword}
            hideKeyword={this.hideKeyword}
          />
        ) : (
          ''
        )}
      </form>
    );
  }
}

export default Search;
