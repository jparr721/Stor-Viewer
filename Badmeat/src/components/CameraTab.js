import React, { Component } from 'react';
import { Text, 
         TouchableOpacity,
         View,
         AppRegistry, 
         Dimensions, 
         TouchableHighlight,
         StyleSheet  } from 'react-native';
import Modal from 'react-native-modal';
import Camera from 'react-native-camera'
import styles from './CameraTab.style';

export default class CameraTab extends Component {
  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderCaptureContent = () => (
    <View style={styles.modalContent}>
      <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  _renderSelectContent = () => (
    <View style={styles.modalContent}>
      <Text>Photo Selection</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this._renderButton('Capture', () => this.setState({ visibleModal: 1 }))}
        {this._renderButton('Select', () => this.setState({ visibleModal: 2 }))}
        
        <Modal 
          isVisible={this.state.visibleModal === 1}
          animationIn={'slideInLeft'}
          animationOut={'slideOutLeft'}
        >
          {this._renderCaptureContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
        >
          {this._renderSelectContent()}
        </Modal>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

/*import React, { Component } from 'react';
import { AppRegistry, 
         Dimensions, 
         TouchableHighlight, 
         Text, 
         View, 
         StyleSheet } from 'react-native';
import Camera from 'react-native-camera'
import Modal from 'react-native-modal';

class CameraTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
          <button onClick={this.toggleModal}>Show modal</button>
        
      </View>


    );
  }
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
      console.log("Take a picture");
  }

  grabLastPicture(){

  }

  postToDB(){

  }

  deleteLastPicture(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('CameraTab', () => CameraTab);
export default CameraTab;

*/


