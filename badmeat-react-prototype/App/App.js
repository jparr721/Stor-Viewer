import React from 'react';
import { StyleSheet} from 'react-native';
import { Tabs } from './app/config/router';


export default class App extends React.Component {
  render() {
    return (
      <Tabs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
