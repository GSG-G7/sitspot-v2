import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Search, SearchResult } from '../../components/index';
import fakeData from '../../components/SearchResult/fakeData';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
  };

  componentDidMount() {
    // fetch sitspots
    this.setState({ sitspots: fakeData });
  }

  render() {
    const {
      sitspots: [...sitspots],
    } = this.state;
    return (
      <>
        <div className="show-case" />
        <Search fontColor="#333" />
        <p className="results-label">{sitspots.length} Search Results</p>
        <SearchResult className="search-page__results" resultArray={sitspots} />
      </>
    );
  }
}

SearchPage.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  lookingFor: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewKeywords: PropTypes.bool.isRequired,
};

export default SearchPage;
