import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../../services';
import { Search, SearchResult } from '../../components/index';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
  };

  componentDidMount() {}

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
  searchState: {
    country: undefined,
    city: undefined,
    lookingFor: '',
    keywords: [],
    viewKeywords: false,
  },
};

export default SearchPage;
