import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const BingoTextInput = props => {
  return (
    <>
      {props.label && (
        <BingoText
          content={props.label}
          style="inputLabel"
          textTransform="uppercase"
        />
      )}
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry ? true : false}
      />
      {props.label && <View style={styles.spacer} />}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.creme,
    borderColor: colors.glace,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: colors.collegiate,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  spacer: {
    paddingBottom: 15,
  },
});

export default BingoTextInput;
