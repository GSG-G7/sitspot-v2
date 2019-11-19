import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { search } from '../../services/api';
import { Search, SearchResult } from '../../components/index';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
  };

  componentDidMount() {
    const { searchState } = this.props;
    if (
      searchState &&
      !(
        Object.entries(searchState).length === 0 &&
        searchState.constructor === Object
      )
    )
      this.onSubmit(searchState);
  }

  onSubmit = state => {
    const qs = new URLSearchParams();
    Object.entries(state).forEach(([key, value]) => qs.append(key, value));
    search(qs.toString()).then(({ data }) => {
      this.setState({ sitspots: data });
    });
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
          onSubmit={this.onSubmit}
          searchState={searchState}
          fontColor="#333"
        />
        <div className="sitspots-notfound-message">
          Sorry, there are no Sitspots that match your search
        </div>
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
  searchState: PropTypes.shape({
    country: PropTypes.string,
    city: PropTypes.string,
    lookingFor: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    viewKeywords: PropTypes.bool,
  }),
};

SearchPage.defaultProps = {
  searchState: {},
};

export default SearchPage;
