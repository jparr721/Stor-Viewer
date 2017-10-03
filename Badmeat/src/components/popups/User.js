import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, Avatar, Icon } from 'react-native-elements';
import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import { setUserSettingsModalVisible } from '../../actions';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#42a5f5'
  },
  headerText: {
    color: "#eceff1",
    fontSize: 20,
  }

});

class User extends Component {

  render() {
    return (
      <View style={{marginRight: 10}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.userSettingsModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayUserMenu()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>User Account</Text>
            </View>
            <View style={{flexDirection: 'row',padding: 10}}>
              <Avatar
                small
                rounded
                icon={{name: 'account-circle'}}
                onPress={() => console.log('pressed')}
                activeOpacity={0.7}
              />
              <Text>Account</Text>
            </View>
          </View>
        </Modal>
        <Avatar
          small
          rounded
          icon={{name: 'account-circle'}}
          onPress={() => this.props.displayUserMenu()}
          activeOpacity={0.7}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userSettingsModalVisible: state.userSettingsModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayUserMenu() {
    dispatch(setUserSettingsModalVisible());
  }

});

const UserMenu = connect(
  mapStateToProps,
  mapDispatchToProps)
(User);


export { UserMenu };
