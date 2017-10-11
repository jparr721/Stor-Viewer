/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { setPantrySearchModalVisible } from '../../actions/index'
import { connect } from 'react-redux';

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

class PantrySearchDialogueContainer extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.pantrySearchModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayPantrySearchModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Search</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>Need to find a pantry item?</Text>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => {
          this.props.displayPantrySearchModal()
        } }>
          <Icon
            name="magnify"
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
    pantrySearchModalVisible: state.pantrySearchModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayPantrySearchModal() {
    dispatch(setPantrySearchModalVisible());
  }

});

const PantrySearchDialogue = connect(
  mapStateToProps,
  mapDispatchToProps)
(PantrySearchDialogueContainer);


export {PantrySearchDialogue};
