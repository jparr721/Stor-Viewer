import React, { Component } from 'react';
import { StyleSheet, View, Modal, ScrollView } from 'react-native';
import { Header, SmallHeader, ColumnGrid, SmallCard } from './common';
import { connect } from 'react-redux';
import { toggleViewAll, loadPantry, storeFoodItemFromApi } from '../actions'
import { NewEntryDialogue, PantrySearchDialogue } from "./popups/";
import { SearchBar, Button, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  viewAllButton: {
    margin: 20,
    flexDirection:'row'
  },
  headline: {
    color: 'white',
  },
});

class PantryContainer extends Component {
   // Call the API to gather entries.
   componentWillMount() {
     this.props.loadFood();
   }
  render() {
    console.log(this.props.food);
    if (this.props.viewingAllItems) {
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
          <ColumnGrid
            items={this.props.food}
            columns={3}
            vertical={true}
          />

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
          items={this.props.food}
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
}

const mapStateToProps = (state) => {
  return {
    viewingAllItems: state.viewingAllItems,
    expiringFoodItems: state.expiringFoodItems,
    fullPantryItems: state.fullPantryItems,
    food: state.foodList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onViewAllClick() {
    dispatch(toggleViewAll());
  },
  loadFood() {
    dispatch(loadPantry());
  },
  storeFoodItemFromApi(item) {
    dispatch(storeFoodItemFromApi(item));
  }

});

const Pantry = connect(
  mapStateToProps,
  mapDispatchToProps)
(PantryContainer);

export default Pantry;
