import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, BingoTextInput} from '..';
import {colors} from '../../assets/colors';

const AddValueRow = props => {
  return (
    <View style={styles.inputRow}>
      <View style={styles.textInputContainer}>
        <BingoTextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <IconButton name="plus" onPress={props.onAddValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
  },
  textInputContainer: {
    width: '100%',
  },
  addButtonContainer: {
    position: 'absolute',
    right: 0,
  },
});

export default AddValueRow;
