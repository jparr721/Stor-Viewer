/**
 * Created by deonj on 8/24/2017.
 */
import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class NewEntryDialogue extends Component {
  state= {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestCloe={() => {console.log("Modal has been closed")}}
        >
          <View style = {{marginTop: 22}}>
            <View>
              <Text>Ayo World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide me!</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show me!</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export { NewEntryDialogue };
