import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet,View, Text, Modal} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { setSearchModalVisible, setNewEntryModalVisible, setSettingsModalVisible } from '../../actions'

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

class HeaderButtonContainer extends Component {
  render() {
    let visible;
    if (this.props.type === "new") {
      visible = this.props.newEntryModalVisible;
    } else if (this.props.type ==="search") {
      visible = this.props.searchModalVisible;
    } else if (this.props.type ==="settings") {
      visible = this.props.settingsModalVisible;
    } else {
      visible = false;
    }
    return (
      <View style={{marginRight: 10 }}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={visible}
          onRequestClose={() => {console.log("Modal has been closed")}}
        >
          <View>
            <View style = {styles.header}>
              <TouchableOpacity style={{marginRight:30}} onPress={() => {
                this.props.activateModal()
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
          this.props.activateModal()
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

const mapStateToProps = (state) => {
  return {
    searchModalVisible: state.searchModalVisible,
    newEntryModalVisible: state.newEntryModalVisible,
    settingsModalVisible: state.settingsModalVisible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  activateModal() {
    if (ownProps.type === "new") {
      dispatch(setNewEntryModalVisible());
    } else if (ownProps.type === "search"){
      dispatch(setSearchModalVisible());
    } else if (ownProps.type === "settings") {
      dispatch(setSettingsModalVisible());
    }
  }
});

const HeaderButton = connect(
  mapStateToProps,
  mapDispatchToProps)
(HeaderButtonContainer);

export { HeaderButton };
