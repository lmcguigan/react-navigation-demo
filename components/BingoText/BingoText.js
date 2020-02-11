import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const BingoText = ({
  content,
  style = 'body',
  textTransform = 'none',
  ...props
}) => {
  return (
    <Text
      style={[
        styles[style],
        props.color ? {color: props.color} : {},
        props.textAlign ? {textAlign: props.textAlign} : {},
        {textTransform},
      ]}>
      {content}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: colors.collegiate,
    fontFamily: 'CooperBlackStd',
    fontSize: 40,
  },
  h2: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 30,
  },
  h3: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
    color: colors.collegiate,
    fontSize: 20,
  },
  h4: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.collegiate,
  },
  h5: {
    color: colors.collegiate,
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 20,
  },
  h6: {
    color: colors.collegiate,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  inputLabel: {
    color: colors.collegiate,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
    paddingBottom: 5,
  },
  body: {
    fontFamily: 'Montserrat-Regular',
    color: colors.collegiate,
  },
  button: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 16,
    textAlign: 'center',
    color: colors.creme,
  },
  byline: {
    color: colors.collegiate,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default BingoText;
