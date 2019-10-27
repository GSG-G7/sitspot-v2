/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { AutoComplete, Select, Radio, Button } from 'antd';
import world from 'full-countries-cities';

import 'antd/dist/antd.css';

const { Option } = Select;

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

class Search extends Component {
  state = {
    sitspot: '',
    country: '',
    city: '',
    lookingFor: '',
  };

  renderOptions = list => {
    const countres = list.map(item => {
      return (
        <Option key={item} value={item}>
          {item}
        </Option>
      );
    });
    return countres;
  };

  render() {
    const { sitspot, country, city } = this.state;
    return (
      <>
        <form onSubmit={this.getSitSpots.bind(this)}>
          <AutoComplete
            style={{ width: 200 }}
            onChange={value => {
              this.setState({ sitspot: value });
            }}
            value={sitspot}
            dataSource={dataSource}
            placeholder="Place Name"
            filterOption={(inputValue, option) => {
              return (
                option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              );
            }}
          />
          <div>
            <div>WHICH Country?</div>
            <Select
              showSearch
              style={{ width: 130 }}
              placeholder="Select"
              optionFilterProp="children"
              onChange={value => {
                this.setState({ country: value, city: '' });
              }}
              value={country}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.renderOptions(world.getCountryNames())}
            </Select>
          </div>
          <div>WHICH City?</div>
          <Select
            showSearch
            style={{ width: 130 }}
            placeholder="Select"
            optionFilterProp="children"
            onChange={value => {
              this.setState({ city: value });
            }}
            value={city}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {country &&
              world.getCities(country) !== undefined &&
              this.renderOptions(world.getCities(country))}
          </Select>
          <div>What Are You Looking For</div>
          <Radio.Group defaultValue="" buttonStyle="solid">
            <Radio.Button
              value="Stay"
              onChange={() => {
                this.setState({ lookingFor: 'stay' });
              }}
            >
              Stay
            </Radio.Button>
            <Radio.Button
              value="eat"
              onChange={() => {
                this.setState({ lookingFor: 'eat' });
              }}
            >
              Eat & drink
            </Radio.Button>
            <Radio.Button
              value="shop"
              onChange={() => {
                this.setState({ lookingFor: 'shop' });
              }}
            >
              Shop
            </Radio.Button>
          </Radio.Group>
          <Button onClick={() => {}}>KeyWords</Button>
          <Button onClick={() => {}}>Search</Button>
        </form>
        <Button onClick={() => {}}>+ Add your recommendation</Button>
      </>
    );
  }
}
export default Search;
