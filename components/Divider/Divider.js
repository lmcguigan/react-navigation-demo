import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.glace,
  },
});

export default Divider;
