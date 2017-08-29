import React from 'react';
import { Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { HeaderButton } from './HeaderButton';
import {NewEntryDialogue} from "./NewEntryDialogue";


const Header = (props) => {
  const { textStyle, viewStyle, container } = styles;
  let newEntryButtonContent = <NewEntryDialogue/>;

  if (props.button1 === "plus") {
    return (
      <View style={container}>
        <Avatar
          small
          rounded
          icon={{ name: 'account-circle' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text style={textStyle}>{props.headerText}</Text>
        <HeaderButton iconName={props.button1} content={newEntryButtonContent} title="Add New Entry"/>
        <HeaderButton iconName={props.button2} />
      </View>
    );
  }
  return (
    <View style={container}>
      <Avatar
        small
        rounded
        icon={{ name: 'account-circle' }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
      <Text style={textStyle}>{props.headerText}</Text>
      <HeaderButton iconName={props.button1} />
      <HeaderButton iconName={props.button2} />
    </View>
  );

};

const styles = {
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
};

export { Header };


{/* <Button title="+" onPress={() => { console.log('Button pressed!'); }} /> */}