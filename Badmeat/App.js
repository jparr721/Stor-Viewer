import React, {Component} from 'react';
import AppContainer from './app/containers/AppContainer';

//Redux
import { Provider } from 'react-redux';
import store from './app/createStore';


class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      )
    }
}
export default App;
