import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { Card, SmallCard, Header } from './';
import { SmallHeader } from './';

const styles = StyleSheet.create({
    row: {
        flex: 0,
        flexDirection: 'row',

    },
    grid: {
        flex: 0,
        flexDirection: 'column',

    },
});

const FourColumnGrid = (props) => {
    let rowNum = 1;
    let grid = [];
        for (let i = 0; i < props.items.length; i++) {
            grid.push(
                <View key={rowNum} style={styles.row}>{props.items[i]}</View>
            );
            rowNum++;
        }
        return(
            <ScrollView style={styles.grid}>
                {grid}
            </ScrollView>
        );

};

export { FourColumnGrid };
