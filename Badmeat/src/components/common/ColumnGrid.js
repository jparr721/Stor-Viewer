import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SmallCard } from './';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 4,
  },
  headline: {
    color: 'white',
  },
  headlineContainer: {
    alignItems: 'center',
    padding: 5,
  }
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

    const photos = [
      {key: "rice", source: require("../../images/cart.jpg")}, {key: "fish", source: require("../../images/cart.jpg")},
      {key: "eggs", source: require("../../images/cart.jpg")}, {key: "burger", source: require("../../images/cart.jpg")},
      {key: "chicken", source: require("../../images/cart.jpg")}, {key: "apples", source: require("../../images/cart.jpg")},
      {key: "milk", source: require("../../images/cart.jpg")}, {key: "watermelon", source: require("../../images/cart.jpg")},
      {key: "cheese", source: require("../../images/cart.jpg")}, {key: "tomatoes", source: require("../../images/cart.jpg")},
      {key: "cherries", source: require("../../images/cart.jpg")}, {key: "sour cream", source: require("../../images/cart.jpg")},
      {key: "mac & cheese", source: require("../../images/cart.jpg")}, {key: "potatoes", source: require("../../images/cart.jpg")},
      {key: "oranges", source: require("../../images/cart.jpg")}, {key: "raisins", source: require("../../images/cart.jpg")},
      {key: "peas", source: require("../../images/cart.jpg")},
    ];
    for (let i in this.props.items) {
      if (counter <= this.props.columns) {
        this.state.organizedList[rowIndex].push(
          <SmallCard key={this.props.items[i].name}>
            <Image source={photos[i].source} style={styles.image} />
            <View style={styles.headlineContainer}>
              <Text style={styles.headline}>{this.props.items[i].name}</Text>
            </View>
          </SmallCard>,
        );
        counter++;
      }
      else {
        rowIndex++;
        this.state.organizedList.push([]);
        this.state.organizedList[rowIndex].push(
          <SmallCard key={this.props.items[i].name}>
            <Image source={photos[i].source} style={styles.image} />
            <View style={styles.headlineContainer}>
              <Text style={styles.headline}>{this.props.items[i].name}</Text>
            </View>
          </SmallCard>,
        );
        counter = 2;
      }
    }
  }
}

function findImage(item, key) {
  return item.key = "key";
}

export {ColumnGrid};
