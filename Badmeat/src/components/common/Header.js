import React, {Component}  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import { setUserSettingsModalVisible } from '../../actions';

class HeaderContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          small
          rounded
          icon={{name: 'account-circle'}}
          onPress={() => this.props.displayUserMenu()}
          activeOpacity={0.7}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  textWrapper: {
    alignItems: 'center',
    flex:1,
    height:42
  },
  textStyle: {
    fontSize: 32,
    fontWeight: '700',
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayUserMenu() {
    dispatch(setUserSettingsModalVisible());
  }

});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps)
(HeaderContainer);


export { Header };
