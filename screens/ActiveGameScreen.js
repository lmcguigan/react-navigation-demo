import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {styles} from './styles';
import {BingoCard, BingoText} from '../components';
import {getUpdatedCard} from '../utilities/utilities';

export default class ActiveGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.navigation.getParam('data').card,
    };
  }
  _updateCard = index => {
    //here we would make a call to the backend to update this in the db
    this.setState({card: getUpdatedCard(index, this.state.card)});
  };
  render() {
    const data = this.props.navigation.getParam('data');
    console.log(this.state.card);
    return (
      <View style={[styles.screenContainer, styles.screenHorizontalPadding]}>
        <BingoText content={data.title} style="h2" textAlign="center" />
        <View style={gameStyles.info}>
          <BingoText content="Created By" style="h6" />
          <BingoText content={data.creator} style="byline" />
        </View>
        <View style={gameStyles.cardContainer}>
          <BingoCard
            values={this.state.card}
            onPressItem={i => this._updateCard(i)}
          />
        </View>
      </View>
    );
  }
}

const gameStyles = StyleSheet.create({
  info: {
    paddingTop: 15,
  },
  cardContainer: {
    paddingTop: 30,
  },
});
