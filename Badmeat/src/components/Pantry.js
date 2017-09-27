import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';
import { Header, SmallHeader, ColumnGrid } from './common';
import { connect } from 'react-redux';
import { toggleViewAll } from '../actions'
import { NewEntryDialogue, PantrySearchDialogue } from "./popups/";

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

class PantryContainer extends Component {
  render() {
    if (!this.props.viewingAllItems) {
      return (
        <View style={styles.container}>
          <Header headerText="Pantry">
            <NewEntryDialogue />
          </Header>

          {/* Expiring food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Expiring Soon"/>
          <ColumnGrid
            items={pantryData.expiringFood}
            columns={3}
            vertical={true}
          />

          {/* Recently added food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Recently Added"/>
          <ColumnGrid
            items={pantryData.newPantryItems}
            columns={3}
            vertical={true}
          />

          <View style={styles.viewAllButton}>
            <Button
              onPress={() => this.props.onViewAllClick()}
              title="View All"
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>

        <Header headerText="Pantry">
          <PantrySearchDialogue />
          <NewEntryDialogue />
        </Header>
        <ColumnGrid
          items={pantryData.fullPantry}
          columns={3}
          vertical={true}
        />

        <View style={styles.viewAllButton}>
          <Button
            onPress={() => this.props.onViewAllClick()}
            title="< New & Old"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewingAllItems: state.viewingAllItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onViewAllClick() {
    dispatch(toggleViewAll());
  },

});

const Pantry = connect(
  mapStateToProps,
  mapDispatchToProps)
(PantryContainer);

export default Pantry;
