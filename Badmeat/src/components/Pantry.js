import React, {Component} from 'react';
import {View, StyleSheet, Button } from 'react-native';
import { Header, SmallHeader, ColumnGrid} from './common';

const pantryData = require('../../dummy_data/dummy_data_1.json');

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#42a5f5',
  },
  viewAllButton: {
    alignItems: 'center',
    margin: 20
  },

});

class Pantry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingAllItems: false,
    };
  }

  render() {
    if (!this.state.viewingAllItems) {
      return (
        <View style={styles.container}>
          <Header headerText="Pantry" button1="plus"/>

          {/* Expiring food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Expiring Soon"/>
          <ColumnGrid
            items={pantryData.expiringFood}
            columns={4}
            vertical={true}
          />

          {/* Recently added food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Recently Added"/>
          <ColumnGrid
            items={pantryData.newPantryItems}
            columns={4}
            vertical={true}
            style={{}}
          />

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
        <Header headerText="Pantry" button1="magnify"/>
        <ColumnGrid
          items={pantryData.fullPantry}
          columns={4}
          vertical={true}
        />

        <View style={styles.viewAllButton}>
          <Button
            onPress={() => this.handleViewAll()}
            title="< New & Old"
          />
        </View>
      </View>
    );
  }
  // Place holder for button handler
  handleViewAll() {
    this.setState({
      viewingAllItems: !this.state.viewingAllItems,
    });
  }
}


export default Pantry;
