/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Icon, Avatar, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'
import {setNewEntryModalVisible} from '../../actions/index'
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
  },
  formStyle: {
    // styling for input field wrapper.
  },
  submitButton: {
    margin: 20,
    flexDirection: 'row'
  }

});

class NewEntryDialogueContainer extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.newEntryModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayNewEntryModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Add a New Entry</Text>
            </View>
            <View style={styles.formStyle}>
              <FormLabel>NAME</FormLabel>
              <FormInput onChangeText={console.log("changed")}
                         underlineColorAndroid='#9E9E9E'
                         placeholder='Enter the type of food'
                         />
              <FormValidationMessage>Error message</FormValidationMessage>
              <FormLabel>QUANTITY</FormLabel>
              <FormInput onChangeText={console.log("changed")}
                         underlineColorAndroid='#9E9E9E'
                         placeholder='How much did you buy?'
                         />
              <FormValidationMessage>Error message</FormValidationMessage>
              <FormLabel>EXPIRATION DATE</FormLabel>
              <FormInput onChangeText={console.log("changed")}
                         underlineColorAndroid='#9E9E9E'
                         placeholder='When does this item expire?'
                         />
              <FormValidationMessage>Error message</FormValidationMessage>
            </View>
            <View style={styles.submitButton}>
              <Button
                raised
                icon={{name: 'check'}}
                onPress={() => console.log("pressed")}
                title="SUBMIT"
                containerViewStyle={{flex:1}}
                backgroundColor='#FFA000'
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text h4>OR</Text>
            </View>
            <View style={styles.submitButton}>
              <Button
                raised
                
                icon={{name: 'camera'}}
                onPress={() => console.log("pressed")}
                title='OPEN CAMERA'
                containerViewStyle={{flex:1}}
                backgroundColor='#9E9E9E'
              />
            </View>
          </View>
        </Modal>
        <Avatar
          small
          rounded
          icon={{name: 'add', size:24}}
          overlayContainerStyle={{backgroundColor: '#757575'}}
          onPress={() => this.props.displayNewEntryModal()}
          activeOpacity={0.7}
        />
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    newEntryModalVisible: state.newEntryModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayNewEntryModal() {
    dispatch(setNewEntryModalVisible());
  }

});

const NewEntryDialogue = connect(
  mapStateToProps,
  mapDispatchToProps)
(NewEntryDialogueContainer);


export {NewEntryDialogue};
