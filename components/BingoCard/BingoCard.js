import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BingoCell} from '..';

const BingoCard = props => {
  return (
    <View style={styles.card}>
      {props.values.map((item, index) => {
        return (
          <BingoCell
            value={item.value}
            key={index}
            index={index}
            selected={item.marked}
            onPressItem={props.onPressItem}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 354,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
});

export default BingoCard;
