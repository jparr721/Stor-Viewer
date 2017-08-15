import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


const HeaderButton = (props) => {
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={props.iconName}
        type="material-community"
        size={28}
        color="#eceff1"
      />
    </TouchableOpacity>
  );
};

export { HeaderButton };
