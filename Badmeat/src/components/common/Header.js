import React from 'react';
import { Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { HeaderButton } from './HeaderButton';
import {NewEntryDialogue} from "./NewEntryDialogue";


const Header = (props) => {
  const { textStyle, viewStyle, container } = styles;
  let title1; let title2;
  let content1; let content2;

  if (props.button1Content === "new") {
    title1 = "Add New Entry";
    content1 = <NewEntryDialogue/>;
  } else if (props.button1Content === "search") {
    title1 = "Search"
  } else if (props.button1Content === "settings") {
    title1 = "Settings"
  }

  if (props.button2Content === "new") {
    title2 = "Add New Entry";
    content2 = <NewEntryDialogue/>;
  } else if (props.button2Content === "search") {
    title2 = "Search"
  } else if (props.button2Content === "settings") {
    title2 = "Settings"
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
      <HeaderButton iconName={props.button1} content={content1} title={title1}/>
      <HeaderButton iconName={props.button2} content={content2} title={title2}/>
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