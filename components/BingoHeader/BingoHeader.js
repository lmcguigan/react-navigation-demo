import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, BingoText} from '../';
import {colors} from '../../assets/colors';

const BingoHeader = props => {
  return (
    <>
      <View style={styles.headerContainer}>
        <IconButton
          style={styles.iconStyle}
          name="chevron-left"
          color={colors.bluespruce}
          onPress={props.onPressBack}
          size={30}
        />
        <View style={styles.textContainer}>
          <BingoText
            style="h1"
            content={props.title}
            textTransform="lowercase"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.wafer,
    height: 160,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  iconStyle: {
    backgroundColor: colors.wafer,
    alignItems: 'flex-start',
  },
  textContainer: {
    width: '100%',
    paddingTop: 10,
    borderBottomColor: colors.glace,
    borderBottomWidth: 2,
  },
});

export default BingoHeader;
