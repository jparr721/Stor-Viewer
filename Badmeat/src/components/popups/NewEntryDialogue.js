/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, StyleSheet, Picker, TextInput, ScrollView } from 'react-native';
import { Icon, Avatar, FormLabel, FormValidationMessage, Button, Text } from 'react-native-elements';
import { setNewEntryModalVisible, newEntry, updateNewEntryName, updateNewEntryUnits,
         updateNewEntryType, updateNewEntryQuantity } from '../../actions';
import {connect} from 'react-redux';
import { SmallCard } from '../common';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    width: '95%',
    height: '80%',
    borderRadius: 5
  },
  backdropView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    alignSelf: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 20,
    borderRadius:5,
    backgroundColor: 'white'
  },
  headerText: {
    color: '#F9be02',
    fontSize: 20,
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    flexDirection: 'row',
  },
  pickerBox: {
    backgroundColor:'#7cdbd5',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '50%',
  },
  close: {
    flex:1,
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
  },
  name: {
    marginLeft: 20,
    marginRight: 20,
  },
  quantity: {
    marginLeft: 20,
    marginRight: 20,
  }

});

class NewEntryDialogueContainer extends Component {
  buildConfig() {
    return ({
      name: this.props.newEntryName,
      quantity: this.props.newEntryQuantity,
      type: this.props.newEntryType,
      units: this.props.newEntryUnits,
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.newEntryModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View style={styles.backdropView}>
            <View style={styles.page}>
              <ScrollView>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Add a New Entry</Text>
                </View>
                <View style={styles.close}>
                  <TouchableOpacity onPress={() => {
                    this.props.displayNewEntryModal()
                  }}>
                    <Icon
                      name={"close"}
                      type="material-community"
                      size={25}
                      color='#7cdbd5'
                    />
                  </TouchableOpacity>
                </View>

                <FormLabel>TYPE</FormLabel>
                <View style={styles.pickerBox}>
                  <Picker mode='dropdown'
                    selectedValue={this.props.newEntryType}
                    onValueChange={(itemValue, itemIndex) => this.props.saveNewEntryType(itemValue)}>
                    <Picker.Item label='Meat'value='meat'/>
                    <Picker.Item label='Dairy'value='dairy'/>
                    <Picker.Item label='Grain'value='grain'/>
                    <Picker.Item label='Fruit'value='fruit'/>
                    <Picker.Item label='Vegetable'value='vegetable'/>
                  </Picker>
                </View>

                <FormLabel>UNITS</FormLabel>
                <View style={styles.pickerBox}>
                  <Picker mode='dropdown'
                    selectedValue={this.props.newEntryUnits}
                    onValueChange={(itemValue, itemIndex) => this.props.saveNewEntryUnits(itemValue)}>
                    <Picker.Item label='lb'value='lb'/>
                    <Picker.Item label='oz'value='oz'/>
                    <Picker.Item label='ml'value='ml'/>
                    <Picker.Item label='count'value='count'/>
                  </Picker>
                </View>
                <FormLabel>NAME</FormLabel>

                <TextInput
                  style={styles.name}
                  onChangeText={console.log("changed")}
                  underlineColorAndroid='#9E9E9E'
                  placeholder='Enter the name of your food!'
                  onChangeText={(text) => this.props.saveNewEntryName(text)}
                  value={this.props.newEntryName}
                />
                <FormValidationMessage>{this.props.newEntryNameError}</FormValidationMessage>

                <FormLabel>QUANTITY</FormLabel>
                <TextInput
                  style={styles.quantity}
                  onChangeText={console.log("changed")}
                  underlineColorAndroid='#9E9E9E'
                  placeholder='How much did you buy?'
                  onChangeText={(text) => this.props.saveNewEntryQuantity(text)}
                  value={this.props.newEntryQuantity}
                />
                <FormValidationMessage>{this.props.newEntryQuantityError}</FormValidationMessage>

                <View style={styles.submitButton}>
                  <Button
                    raised
                    icon={{name: 'check'}}
                    onPress={() => this.props.createNewEntry(this.buildConfig())}
                    title="SUBMIT"
                    containerViewStyle={{flex:1}}
                    backgroundColor='#F9be02'
                    color='white'
                  />
                </View>
              </ScrollView>
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
    newEntryModalVisible: state.newEntryModalVisible,
    newEntryName: state.newEntryName,
    newEntryQuantity: state.newEntryQuantity,
    newEntryType: state.newEntryType,
    newEntryUnits: state.newEntryUnits,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayNewEntryModal() {
    dispatch(setNewEntryModalVisible());
  },
  createNewEntry(config) {
    dispatch(newEntry(config));
  },
  saveNewEntryType(selection) {
    dispatch(updateNewEntryType(selection));
  },
  saveNewEntryUnits(selection) {
    dispatch(updateNewEntryUnits(selection));
  },
  saveNewEntryName(input) {
    dispatch(updateNewEntryName(input));
  },
  saveNewEntryQuantity(input) {
    dispatch(updateNewEntryQuantity(input));
  },
});

const NewEntryDialogue = connect(
  mapStateToProps,
  mapDispatchToProps)
(NewEntryDialogueContainer);


export {NewEntryDialogue};
