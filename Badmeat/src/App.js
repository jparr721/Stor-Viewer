import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Router from './Router';
import configureStore from '../configureStore'
import { fetchDataFromAPI }from './actions'
class App extends Component {
  render() {

    const store = configureStore();
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchDataFromAPI())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
