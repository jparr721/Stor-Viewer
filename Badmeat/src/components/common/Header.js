import React, {Component}  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';


class Header extends Component {
  render() {
    console.log(this.props.button1onPress);
    return (
      <View style={styles.container}>
        <Avatar
          small
          rounded
          icon={{name: 'account-circle'}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
        {this.props.children}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    // height: 60,
    // flex: 1,
    paddingLeft: 10,

  },
  viewStyle: {
    // flex: 1,
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 32,
    fontWeight: '700',
    flex: 1,
  },
});
function handle() {
  return (this);
}
export { Header };
