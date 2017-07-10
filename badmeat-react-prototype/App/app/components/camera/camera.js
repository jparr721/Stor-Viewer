import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Sheet } from '../../styles';

export default class Camera extends Component {
    render(){
        return (
            <View style={Sheet.contianerAdjust}> 
                <Text>Camera Page</Text>
            </View>
        )
    }
}