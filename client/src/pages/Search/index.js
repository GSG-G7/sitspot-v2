import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Search, SearchResult } from '../../components/index';
import fakeData from '../../components/SearchResult/fakeData';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
  };

  // eslint-disable-next-line no-unused-vars
  getSitSpots = data => {
    // fetch data depending on the data paramter
    this.setState({ sitspots: fakeData });
  };

  render() {
    const { searchState } = this.props;
    const {
      sitspots: [...sitspots],
    } = this.state;
    return (
      <>
        <div className="show-case">
          {sitspots.length !== 0 && (
            <p className="results-label">{sitspots.length} Search Results</p>
          )}
        </div>
        <Search
          getSitSpots={this.getSitSpots}
          searchState={searchState}
          fontColor="#333"
        />
        {sitspots && (
          <SearchResult
            className="search-page__results"
            resultArray={sitspots}
          />
        )}
      </>
    );
  }
}

SearchPage.propTypes = {
  searchState: PropTypes.shape(),
};

SearchPage.defaultProps = {
  searchState: undefined,
};

export default SearchPage;
