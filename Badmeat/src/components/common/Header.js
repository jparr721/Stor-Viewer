import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    height: 60,
    position: 'relative'
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 32,
    fontWeight: '700',
  }
};

export { Header };
