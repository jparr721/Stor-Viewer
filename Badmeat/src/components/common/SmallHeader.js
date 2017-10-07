/**
 * Created by deonj on 8/10/2017.
 */

import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const SmallHeader = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        height: 40,
        position: 'relative'
    },
    textStyle: {
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '700',
        color: 'white'
    }
};

export  { SmallHeader };
