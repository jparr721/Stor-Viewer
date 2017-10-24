import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon, Rating, Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { setRecipesModalVisible } from '../../actions';
import { Card } from '../common';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop:10,
    backgroundColor: '#424242'
  },
  headerText: {
    color: '#eceff1',
    fontSize: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#424242',
  },
  cardContainer: {
    backgroundColor: 'white',
  },
  cardDetails: {
    padding:5,
    flexDirection: 'row',
  },
  titleAndRating: {
    flex: 1,
    marginRight: 30
  },
  saveButton: {
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  image: {
    height: 225,
    width: null,
    paddingBottom:5,
  }
});

class Recipes extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.recipesModalVisible}
          onRequestClose= {() => {
            console.log("Recipes modal closed.")
          }}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity style={{marginRight: 30}} onPress={() => {
                this.props.displayRecipesModal()
              }}>
                <Icon
                  name={"arrow-left"}
                  type="material-community"
                  size={25}
                  color="#eceff1"
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>RECIPES</Text>
            </View>
            <Card>
              <View style={styles.cardContainer}>
                <Image source ={require('../../images/burger.jpg')} style={styles.image}/>
                <View style={styles.cardDetails}>
                  <View style={styles.titleAndRating}>
                    <Text>GOURMET BURGER</Text>
                    <Rating
                      type='star'
                      ratingCount={5}
                      startingValue={4.25}
                      imageSize={20}
                      onFinishRating={console.log('Rating submitted')}
                    />
                  </View>
                  <View style={styles.saveButton}>
                    <Button
                      raised
                      icon={{name: 'share'}}
                      onPress={() => console.log("pressed")}
                      containerViewStyle={{marginRight:0}}
                      title='SHARE'
                      backgroundColor='#1976D2'
                    />
                    <Button
                      raised
                      onPress={() => console.log("pressed")}
                      title='SAVE'
                      containerViewStyle={{width: "50%", marginRight:0}}
                      backgroundColor='#FFA000'
                    />
                  </View>
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.cardContainer}>
                <Image source ={require('../../images/fish.jpg')} style={styles.image}/>
                <View style={styles.cardDetails}>
                  <View style={styles.titleAndRating}>
                    <Text>BAKED FISH</Text>
                    <Rating
                      type='star'
                      ratingCount={5}
                      startingValue={3.5}
                      imageSize={20}
                      onFinishRating={console.log('Rating submitted')}
                    />
                  </View>
                  <View style={styles.saveButton}>
                    <Button
                      raised
                      icon={{name: 'share'}}
                      onPress={() => console.log("pressed")}
                      containerViewStyle={{marginRight:0}}
                      title='SHARE'
                      backgroundColor='#1976D2'
                    />
                    <Button
                      raised
                      onPress={() => console.log("pressed")}
                      title='SAVE'
                      containerViewStyle={{width: "50%", marginRight:0}}
                      backgroundColor='#FFA000'
                    />
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
