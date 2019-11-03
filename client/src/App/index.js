import React from 'react';
import { Header } from '../components';
import { AddReview } from '../pages';
import './style.css';

const App = () => (
  <div className="App">
    <Header />
    <AddReview type="EAT" sitspotId="2" />
  </div>
);

export default App;
