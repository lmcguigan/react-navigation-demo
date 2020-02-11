import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const GameListItem = props => {
  const data = {
    title: props.title,
    creator: props.creator,
    card: props.card,
  };
  return (
    <View
      style={
        props.index % 2 !== 0
          ? [styles.itemContainer, styles.itemContainerAlt]
          : styles.itemContainer
      }>
      <View style={styles.titleContainer}>
        <BingoText style="h5" content={props.title} />
      </View>
      <View style={styles.creditContainer}>
        <BingoText style="h6" content="Creator" />
        <BingoText style="byline" content={props.creator} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={
            props.index % 2 !== 0
              ? [styles.iconButton, styles.iconButtonAlt]
              : styles.iconButton
          }
          onPress={() => props.openGame(data)}>
          <Icon name="arrow-right" color={colors.creme} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: colors.wafer,
    alignItems: 'center',
  },
  itemContainerAlt: {
    backgroundColor: colors.glace,
  },
  item: {
    color: colors.collegiate,
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 20,
  },
  iconButton: {
    backgroundColor: colors.rhodochrosite,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonAlt: {
    backgroundColor: colors.marina,
  },
  titleContainer: {
    flex: 2,
  },
  creditContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default GameListItem;
