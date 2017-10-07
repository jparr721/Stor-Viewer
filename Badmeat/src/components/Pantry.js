import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native';
import { Header, SmallHeader, ColumnGrid, SmallCard } from './common';
import { connect } from 'react-redux';
import { toggleViewAll } from '../actions'
import { NewEntryDialogue, PantrySearchDialogue } from "./popups/";
import { SearchBar, Button } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  viewAllButton: {
    alignItems: 'center',
    margin: 20,
    flexDirection:'row'
  },
  headline: {
    color: 'white',
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

          <SearchBar
            round
            clearIcon
            lightTheme
            onChangeText={() => console.log('changed')}
            placeholder='Search for an item...'
            containerStyle={{backgroundColor: '#424242',
                             borderTopWidth: 0,
                             borderBottomWidth: 0,}}
          />

          {/* Expiring food view (May add horizontal scrolling) */}
          <SmallHeader headerText="Expiring Soon"/>
          <ColumnGrid
            items={this.props.expiringFoodItems}
            columns={3}
            vertical={true}
          />

          <View style={styles.viewAllButton}>
            <Button
              raised
              onPress={() => this.props.onViewAllClick()}
              title="VIEW ALL"
              containerViewStyle={{flex:1}}
              backgroundColor='#FFA000'
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>

        <Header headerText="Pantry">
          <NewEntryDialogue />
        </Header>
        <SearchBar
          round
          clearIcon
          lightTheme
          onChangeText={() => console.log('changed')}
          placeholder='Search for an item...'
          containerStyle={{backgroundColor: '#424242',
                           borderTopWidth: 0,
                           borderBottomWidth: 0,}}
        />

        <SmallHeader headerText="All Items"/>
        <ScrollView>
        
        </ScrollView>

        <View style={styles.viewAllButton}>
          <Button
            raised
            onPress={() => this.props.onViewAllClick()}
            title="NEW & OLD"
            containerViewStyle={{flex:1}}
            backgroundColor='#FFA000'
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewingAllItems: state.viewingAllItems,
    expiringFoodItems: state.expiringFoodItems,
    fullPantryItems: state.fullPantryItems,
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
