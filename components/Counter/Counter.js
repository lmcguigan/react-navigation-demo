import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const Counter = props => {
  return (
    <View style={styles.counterContainer}>
      <BingoText style="h4" content={props.header} color={colors.bluespruce} />
      <BingoText
        content={props.value}
        style="h2"
        color={colors.rhodochrosite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Counter;
