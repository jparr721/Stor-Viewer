import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class AppContainer extends Component {
  render(){
    return (
      <View>
        <Text>Fuck my life</Text>
      </View>
    )
  }
}

export default AppContainer;
