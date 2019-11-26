import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import { search } from '../../services/api';
import { Search, SearchResult } from '../../components/index';
import { ImagesContext } from '../../context/ImageContext';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
    loading: false,
    message: null,
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
    this.setState({ sitspots: [], loading: true });
    const qs = new URLSearchParams();
    Object.entries(state).forEach(([key, value]) => qs.append(key, value));
    search(qs.toString()).then(({ data }) => {
      if (!data.length) {
        // eslint-disable-next-line no-unused-vars
        this.setState(_state => ({
          sitspots: data,
          loading: false,
          message: 'Sorry, there are no Sitspots that match your search',
        }));
      } else {
        // eslint-disable-next-line no-unused-vars
        this.setState(_state => ({
          sitspots: data,
          loading: false,
          message: null,
        }));
      }
    });
  };

  render() {
    const { searchState } = this.props;
    const {
      sitspots: [...sitspots],
      loading,
      message,
    } = this.state;
    return (
      <>
        <ImagesContext.Consumer>
          {context => {
            const { image } = context;
            return (
              <div
                className="show-case"
                style={{
                  background: `url(${image}) no-repeat center center/cover`,
                }}
              >
                {sitspots.length !== 0 && (
                  <p className="results-label">
                    {sitspots.length} Search Results
                  </p>
                )}
              </div>
            );
          }}
        </ImagesContext.Consumer>
        <Search
          onSubmit={this.onSubmit}
          searchState={searchState}
          fontColor="#333"
        />
        {loading && (
          <Icon
            type="loading"
            style={{ fontSize: 100, display: 'block', margin: '2rem auto' }}
            spin
          />
        )}
        {message !== null && !loading && (
          <p className="sitspots-notfound-message">
            Sorry, there are no Sitspots that match your search
          </p>
        )}
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
