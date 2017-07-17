import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Drawer } from '../router';
import Settings from '../components/settings/settings';
import { openDrawer } from '../actions/drawerActions';

@connect((store) => {
  return {
    value: store.value,
  };
})

class AppContainer extends Component {
  componentWillMount() {
    this.props.dispatch(openDrawer())
  }

  render(){
    return (
      <Drawer/>
    )
  }
}
