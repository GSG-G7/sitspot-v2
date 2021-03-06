import React from 'react';
import propTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="page-container">{children}</div>
    <Footer />
  </>
);

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Layout;
