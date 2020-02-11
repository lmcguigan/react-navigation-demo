import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const Button = props => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <BingoText style="button" content={props.label} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.rhodochrosite,
    height: 40,
    minWidth: 150,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
});

export default Button;
