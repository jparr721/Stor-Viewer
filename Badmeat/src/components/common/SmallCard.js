import React from 'react';
import { View, StyleSheet } from 'react-native';

const SmallCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 4,
    borderColor: '#000',
    backgroundColor: '#abafb5',
    borderBottomWidth: 0,
    margin: 10,
    flex: 1,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    overflow: 'hidden',
  },
});

export { SmallCard };
