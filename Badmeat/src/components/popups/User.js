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

    const menu = [
      {
        title: 'Account',
        icon: 'account-circle'
      },
      {
        title: 'Other',
        icon: 'accessibility'
      }
    ]

    return (
      <View>
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
            <View>
              <List>
                {
                  menu.map((item,i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{name: item.icon}}
                    />
                  ))
                }
              </List>
            </View>
          </View>
        </Modal>

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
