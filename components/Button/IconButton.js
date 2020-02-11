import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../assets/colors';

const IconButton = ({size = 20, ...props}) => {
  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.primary, props.style]}>
        <Icon
          name={props.name}
          color={props.color ? props.color : colors.creme}
          size={size}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.bluespruce,
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryDisabled: {
    backgroundColor: colors.marina,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default IconButton;
