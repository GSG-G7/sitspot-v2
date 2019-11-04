import React from 'react';

import { Layout } from '../components';
import { Search } from '../pages/index';
import './style.css';

const App = () => (
  <div className="App">
    <Layout>
      <Search />
    </Layout>
  </div>
);

export default App;
