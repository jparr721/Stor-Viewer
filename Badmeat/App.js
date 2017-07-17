/**
* @flow
*/
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/AppContainer';

//Redux
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';

class App extends Component {
    render() {
      return (
        <Provider store={configureStore}>
          <AppContainer />
        </Provider>
      );
    }
}

AppRegistry.registerComponent('Badmeat', () => App)

export default App;
