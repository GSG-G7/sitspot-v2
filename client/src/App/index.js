import React from 'react';
import { SearchResult } from '../components';

import './style.css';

const App = () => {
  const arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <div className="App">
      {' '}
      <SearchResult resultArray={arr} />{' '}
    </div>
  );
};

export default App;
