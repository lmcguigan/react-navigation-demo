import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BingoText from '../BingoText/BingoText';

const BingoCell = props => {
  return (
    <TouchableOpacity
      style={styles.bingoCell}
      onPress={() => props.onPressItem(props.index)}
      underlayColor={colors.winter}>
      <BingoText content={props.value} style="h6" />
      {props.selected && (
        <View style={styles.crossOutContainer}>
          <Icon name="times" size={70} color={colors.bluespruce} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bingoCell: {
    backgroundColor: colors.glace,
    justifyContent: 'center',
    alignContent: 'center',
    width: '33%',
    height: '33%',
    borderWidth: 1,
    borderColor: colors.marina,
    padding: 5,
  },
  crossOutContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
});

export default BingoCell;
