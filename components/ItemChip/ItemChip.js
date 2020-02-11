import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const ItemChip = props => {
  return (
    <View style={styles.chipContainer}>
      <BingoText style="body" content={props.content} />
      <TouchableOpacity
        style={styles.removeContainer}
        onPress={props.onRemoveItem}>
        <Icon name="times" color={colors.bluespruce} size={15} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: colors.glace,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginVertical: 3,
    marginRight: 3,
    height: 40,
  },
  removeContainer: {
    backgroundColor: colors.winter,
    borderRadius: 15,
    borderColor: colors.bluespruce,
    borderWidth: 2,
    height: 25,
    width: 25,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ItemChip;
