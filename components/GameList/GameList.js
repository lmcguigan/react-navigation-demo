import React from 'react';
import {View, StyleSheet} from 'react-native';
import Divider from '../Divider/Divider';
import GameListItem from './GameListItem';
import {colors} from '../../assets/colors';
import {BingoText} from '..';

const GameList = props => {
  return (
    <View style={styles.gamesList}>
      <View style={styles.headerContainer}>
        <BingoText
          content={props.subheader}
          style="h3"
          textTransform="uppercase"
        />
        <Divider />
      </View>
      {props.list.map((e, i) => {
        return (
          <GameListItem
            index={i}
            key={i}
            title={e.title}
            creator={e.creator}
            card={e.card}
            openGame={props.openGame}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  gamesList: {
    paddingTop: 50,
  },
  subheader: {
    color: colors.collegiate,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
    fontSize: 20,
  },
  headerContainer: {
    paddingHorizontal: 40,
  },
});

export default GameList;
