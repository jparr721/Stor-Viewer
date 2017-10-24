import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Card, SmallCard, Header } from './common';
import { DashboardSearchDialogue, DashboardSettingsDialogue, UserMenu } from './popups'
import { Avatar, Icon  } from 'react-native-elements';
import { setRecipesModalVisible } from '../actions'
import { connect } from 'react-redux';
import Recipes from './popups/Recipes'
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  smallCardContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: null,
    borderRadius: 2,
  },
  backdropView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 2,
    position: 'absolute',
  },
  headline: {
    fontSize: 24,
    color: 'white',
  },
});

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserMenu />
        <Recipes />
        <Header headerText="Dashboard">
          <DashboardSearchDialogue/>
        </Header>
        <ScrollView>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}} onPress={() => {this.props.displayRecipesModal()}}>
              <SmallCard>
                <Image source={require('../images/pizza.jpg')} style={styles.image} />
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>RECIPES</Text>
                </View>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/peppers.jpg')} style={styles.image} />
                <View style={styles.backdropView}>
                    <Text style={styles.headline}>MY LIST</Text>
                </View>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/barbecue.jpg')} style={styles.image} />
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>SHARE</Text>
                </View>
              </SmallCard>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardContainer}>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/apples.jpg')} style={styles.image} />
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>SAVINGS</Text>
                </View>
              </SmallCard>
            </TouchableOpacity>
            <TouchableOpacity style ={{flex:1}}>
              <SmallCard>
                <Image source={require('../images/orange.jpg')} style={styles.image} />
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>STORES</Text>
                </View>
              </SmallCard>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipesModalVisible: state.recipesModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayRecipesModal() {
    dispatch(setRecipesModalVisible());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
