import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card, SmallCard, Header } from './common';
import { SmallHeader } from './common/SmallHeader';
import { FourColumnGrid} from './common/FourColumnGrid'

const pantryData = require('../../dummy_data/dummy_data_1.json');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllButton: {
    alignItems: 'center',
  },

});

class Pantry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPantryList: [[]],
      expiringItems: [],
      recentlyAdded: [],
      viewingAllItems: false,
    };
    this.fetchExpiring();
    this.fetchNewFood();
    this.fetchAllFood();
  }

  render() {
    if (!this.state.viewingAllItems) {
      return (
        <View style={styles.container}>
          <Header headerText="Pantry" />

          {/* Expiring food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Expiring Soon" />
          <View style={styles.row}>
            {this.state.expiringItems}
          </View>

          {/* Recently added food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Recently Added" />
          <View style={styles.row}>
            {this.state.recentlyAdded}
          </View>

          <View style={styles.viewAllButton}>
            <Button
              onPress={() => this.handleViewAll()}
              title="View All"
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
          <Header headerText="Pantry" />
          <FourColumnGrid items={this.state.fullPantryList}/>


        <View style={styles.viewAllButton}>
          <Button
            onPress={() => this.handleViewAll()}
            title="< New & Old"
          />
        </View>
      </View>
    );
  }

  fetchAllFood() {
      let rowIndex = 0;
      let counter =1;

    for (let i in pantryData.fullPantry) {
        if (counter <= 4) {
            this.state.fullPantryList[rowIndex].push(
                <SmallCard key={pantryData.fullPantry[i].name}>
                    <Text>{pantryData.fullPantry[i].name}</Text>
                </SmallCard>,
            );
            counter++;
        }
        else {
            rowIndex++;
            this.state.fullPantryList.push([]);
            this.state.fullPantryList[rowIndex].push(
                <SmallCard key={pantryData.fullPantry[i].name}>
                    <Text>{pantryData.fullPantry[i].name}</Text>
                </SmallCard>,
            );
            counter = 2;
        }
    }
  }

  fetchExpiring() {
    for (const i in pantryData.expiringFood) {
      this.state.expiringItems.push(
        <SmallCard key={pantryData.expiringFood[i].name}>
          <Text>{pantryData.expiringFood[i].name}</Text>
        </SmallCard>,
      );
    }
  }

  fetchNewFood() {
    for (const i in pantryData.newPantryItems) {
      this.state.recentlyAdded.push(
        <SmallCard key={pantryData.newPantryItems[i].name}>
          <Text>{pantryData.newPantryItems[i].name}</Text>
        </SmallCard>,
      );
    }
  }

  // Place holder for button handler
  handleViewAll() {
    this.setState({
      viewingAllItems: !this.state.viewingAllItems,
    });
  }
}


export default Pantry;
