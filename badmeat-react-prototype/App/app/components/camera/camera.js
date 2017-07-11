import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Sheet } from '../../styles';
import Cam from 'react-native-camera';

export default class Camera extends Component {

    getInitialState() {
        return {
            cameraType: Cam.constants.Type.back
        }
    }

    render(){
        return (
           <Cam
                ref="cam"
                style={Sheet.contianerAdjust}
                type={this.state.cameraType}>
                <View style={styles.buttonBar}>
                    <TouchableHighlight style={styles.button} onPress={this._switchCamera}>
                        <Text style={styles.buttonText}>Flip</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this._takePicture}>
                        <Text style={styles.buttonText}>Take</Text>
                    </TouchableHighlight>
                </View>
            </Cam>
        );
    }

    _switchCamera() {
        let state = this.state;
        state.cameraType = state.cameraType === Cam.constants.Type.back ? Cam.constants.Type.front : Cam.constants.Type.back;
        this.setState(state);
    }

    _takePicture() {
        this.refs.cam.capture((err, data) => {
            console.log(err, data);
        });
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    buttonBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        right: 0,
        left: 0,
        justifyContent: "center"
    },
    button: {
        padding: 10,
        color: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        margin: 5
    },
    buttonText: {
        color: "#FFFFFF"
    }
});