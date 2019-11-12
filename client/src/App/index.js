import React from 'react';

import { Layout } from '../components';
import { SinglePlace } from '../pages';

import './style.css';

const App = () => (
  <div className="App">
    <Layout>
      <SinglePlace />
    </Layout>
  </div>
);

export default App;
