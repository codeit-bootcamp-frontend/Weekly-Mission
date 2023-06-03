import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
