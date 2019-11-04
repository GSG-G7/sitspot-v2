import React from 'react';
import { AddReview } from '../pages';

import { Layout } from '../components';

import './style.css';

const App = () => (
  <div className="App">
    <Layout>
      <AddReview type="EAT" sitspotId="2" />
      {/* some page component here */}
    </Layout>
  </div>
);

export default App;
