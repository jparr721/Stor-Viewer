/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import {setDashboardSettingsModalVisible} from '../../actions/index'
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  header: {

    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFA000'
  },
  headerText: {
    color: "#eceff1",
    fontSize: 20,
  }

});

class DashboardSettingsDialogueContainer extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.dashboardSettingsModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayDashBoardSettingsModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>Change your app settings!</Text>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => {
          this.props.displayDashBoardSettingsModal()
        } }>
          <Icon
            name="settings"
            type="material-community"
            size={28}
            color="#eceff1"
          />
        </TouchableOpacity>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardSettingsModalVisible: state.dashboardSettingsModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayDashBoardSettingsModal() {
    dispatch(setDashboardSettingsModalVisible());
  }

});

const DashboardSettingsDialogue = connect(
  mapStateToProps,
  mapDispatchToProps)
(DashboardSettingsDialogueContainer);


export {DashboardSettingsDialogue};
