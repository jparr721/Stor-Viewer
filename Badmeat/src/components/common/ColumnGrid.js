import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { SmallCard } from './';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

class ColumnGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizedList: [[]]
    };
    this.organizeItems();
  }

  render() {
    let rowNum = 1;
    let grid = [];

    for (let i = 0; i < this.props.items.length; i++) {
      grid.push(
        <View key={rowNum} style={styles.row}>{this.state.organizedList[i]}</View>
      );
      rowNum++;
    }
    if (this.props.vertical === true) {
      return (
        <ScrollView
          contentContainerStyle={{ flexDirection: 'column'}}
          horizontal={false}>
          {grid}
        </ScrollView>
      );
    }
    return (
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexGrow:1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {grid}
      </ScrollView>
    );

  }

  organizeItems() {
    let rowIndex = 0;
    let counter = 1;

    for (let i in this.props.items) {
      if (counter <= this.props.columns) {
        this.state.organizedList[rowIndex].push(
          <SmallCard key={this.props.items[i].name}>
            <Text>{this.props.items[i].name}</Text>
          </SmallCard>,
        );
        counter++;
      }
      else {
        rowIndex++;
        this.state.organizedList.push([]);
        this.state.organizedList[rowIndex].push(
          <SmallCard key={this.props.items[i].name}>
            <Text>{this.props.items[i].name}</Text>
          </SmallCard>,
        );
        counter = 2;
      }
    }
  }

}

export {ColumnGrid};
