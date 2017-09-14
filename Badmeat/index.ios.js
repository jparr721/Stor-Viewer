import React from 'react'
import { AppRegistry } from 'react-native'

import {Provider} from 'react-redux'
import configureStore from './configureStore'
import App from './src/App';

const store = configureStore();

const badMeat = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('Badmeat', () => badMeat)