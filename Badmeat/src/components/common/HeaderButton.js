import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet,View, Text, Modal} from 'react-native';
import { Icon } from 'react-native-elements';
import {NewEntryDialogue} from "./NewEntryDialogue";

const styles = StyleSheet.create({
  header:{

    flexDirection: "row",
    alignItems:"flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor:'#42a5f5'
  },
  headerText:{
    color: "#eceff1",
    fontSize: 20,

  }
});

class HeaderButton extends Component {
  state= {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginRight: 10 }}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {console.log("Modal has been closed")}}
        >
          <View>
            <View style = {styles.header}>
              <TouchableOpacity style={{marginRight:30}} onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
            <View style = {{ padding:10}}>
              {this.props.content}
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
        }}>
          <Icon
            name={this.props.iconName}
            type="material-community"
            size={28}
            color="#eceff1"
          />
        </TouchableOpacity>

      </View>
    );
  }
}

export { HeaderButton };
