import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ItemChip} from '..';
import {colors} from '../../assets/colors';
import {ScrollView} from 'react-native-gesture-handler';

const ChipGroup = props => {
  return (
    <View style={styles.containerOuter}>
      <ScrollView style={styles.scrollContainer} persistentScrollBar={true}>
        <View style={styles.valuesContainer}>
          {props.items.map((e, i) => {
            return (
              <ItemChip
                key={i}
                content={e}
                onRemoveItem={() => props.onRemoveItem(e)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.creme,
    borderRadius: 12,
    minHeight: 270,
  },
  valuesContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerOuter: {
    paddingBottom: 30,
    height: 300,
  },
});

export default ChipGroup;
