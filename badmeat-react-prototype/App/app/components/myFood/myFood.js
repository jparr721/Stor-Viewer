import React, {Component} from 'react';
import {View, Text, Scrollview} from 'react-native';
import { Sheet } from '../../styles';

export default class MyFood extends Component {
    render() {
        return (
            <View style={Sheet.contianerAdjust}>
                <Text>Food Page</Text>
            </View>
        )
    }
}