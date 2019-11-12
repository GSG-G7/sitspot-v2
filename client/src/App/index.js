import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../components';
import { AboutUs, AddReview, FAQ, Home, Search } from '../pages';
import './style.css';

// const pages = [
//   { page: Home, path: ['/home', '/'] },
//   { page: FAQ, path: ['/FAQ'] },
//   { page: AboutUs, path: ['/about-us'] },
//   { page: Search, path: ['/search'] },
//   { page: 'Place', path: ['/sitspot/:id'] },
//   { page: 'AddNewPlace', path: ['/add-place'] },
//   { page: AddReview, path: ['/add-review'] },
// ];
const App = () => (
  <div className="App">
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/faq" component={() => <FAQ />} />
        <Route path="/about-us" component={() => <AboutUs />} />
        <Route
          path="/search"
          render={({ location: { state = {} } }) => (
            <Search searchState={state} />
          )}
        />
        <Route
          path="/add-review/:type/:sitspotId"
          render={({
            match: {
              params: { type, sitspotId },
            },
          }) => <AddReview type={type} sitspotId={sitspotId} />}
        />
        {/* <Route path="/add-place">
          <AddNewPlace />
        </Route> */}
        {/* <Route
          path="/sitspot/:id"
          render={({
            match: {
              params: { id },
            },
          }) => <SitSpotPage sitspotId={id} />}
        /> */}
      </Switch>
    </Layout>
  </div>
);

export default App;
