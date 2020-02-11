import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {styles} from './styles';
import {GameList, BingoText} from '../components';
import data from '../assets/data/data.json';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.screenContainer, homeStyles.content]}>
        <ImageBackground
          source={require('../assets/images/bingofoliage.png')}
          style={homeStyles.bgImg}>
          <View style={styles.screenHorizontalPadding}>
            <BingoText content={'my\ngames'} style="h1" />
          </View>
        </ImageBackground>
        <GameList
          subheader="ACTIVE"
          list={data.user.games.active}
          openGame={content =>
            this.props.navigation.navigate('GameDetail', {data: content})
          }
        />
        <GameList
          subheader="COMPLETED"
          list={data.user.games.completed}
          openGame={content =>
            this.props.navigation.navigate('GameDetail', {data: content})
          }
        />
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
  },
  content: {
    paddingTop: 50,
  },
});
