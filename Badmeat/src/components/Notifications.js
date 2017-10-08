import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { Card, SmallCard, Header, HeaderButton } from './common';
import { List, ListItem, Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { setDashBoardSearchModalVisible } from '../actions';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#424242',
  },
  smallCardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 4,
  },
  headline: {
    fontSize:18,
    height:26,
    paddingLeft: 10,
    color: 'white'
  },
  notificationsList: {
    marginLeft: 10,
    marginRight:10
  },
  clearNotificationsButton: {
    alignItems: 'center',
    margin: 20,
    flexDirection:'row'
  },
});

class NotificationsContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Notifications" >
          <Avatar
            small
            rounded
            icon={{name: 'search', size:24}}
            overlayContainerStyle={{backgroundColor: '#757575'}}
            onPress={() => this.props.displayDashBoardSearchModal()}
            activeOpacity={0.7}
          />
        </Header>
        <ScrollView style={styles.notificationsList}>
          <List>
            {
              this.props.notificationsList.notifications.map((item,i) => (
                <ListItem
                  key={i}
                  title={item.title}
                />
              ))
            }
          </List>
        </ScrollView>
        <View style={styles.clearNotificationsButton}>
          <Button
            raised
            onPress={() => console.log("yo")}
            title="CLEAR NOTIFICATIONS"
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
    notificationsList: state.notificationsList,
  }
};

const mapDispatchToProps = (dispatch) => ({
  displayDashBoardSearchModal() {
    dispatch(setDashBoardSearchModalVisible());
  }
});

const Notifications = connect(
  mapStateToProps,
  mapDispatchToProps)
  (NotificationsContainer);

export default Notifications;
