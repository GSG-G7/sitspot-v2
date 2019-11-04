import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import SearchResult from '../../components/SearchResult';

import './style.css';

class SearchPage extends Component {
  state = {
    sitspots: [],
  };

  componentDidMount() {
    // fetch sitspots
    // this.setState({ sitspots });
  }

  render() {
    const {
      sitspots: [...sitspots],
    } = this.state;
    return (
      <>
        <div className="show-case">
          <Header />
        </div>
        <div className="search-wrapper">
          <Search fontColor="#333" />
          <p className="search-wrapper__results-label">
            {sitspots.length} Search Results
          </p>
          <SearchResult
            className="search-wrapper__search-results__wrapper"
            resultArray={sitspots}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default SearchPage;
