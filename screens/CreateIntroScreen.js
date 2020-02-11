import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {styles} from './styles';
import {Button, BingoText} from '../components';
import {colors} from '../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CreateIntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {n: 3, description: 'Minimum 9 values, no free space.'},
        {n: 5, description: 'Minimum 24 values, free space in center.'},
      ],
      chosenOption: 3,
    };
  }
  render() {
    return (
      <View style={[styles.screenContainer, styles.screenHorizontalPadding]}>
        <BingoText
          content="How large of a card would you like to build? Tap on the card size of
          your choice."
        />
        <View style={introStyles.mocksContainer}>
          {this.state.options.map((e, i) => {
            return (
              <TouchableOpacity
                style={[
                  introStyles.card,
                  e.n === this.state.chosenOption ? introStyles.chosen : {},
                ]}
                key={i}
                onPress={() => this.setState({chosenOption: e.n})}>
                <BingoText
                  style="h2"
                  content={`${e.n} x ${e.n}`}
                  color={colors.creme}
                />
                <BingoText
                  content={e.description}
                  color={colors.creme}
                  textAlign="center"
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <Button
            label="next"
            onPress={() =>
              this.props.navigation.navigate('Values', {
                size: this.state.chosenOption,
              })
            }
          />
        </View>
      </View>
    );
  }
}

const introStyles = StyleSheet.create({
  mocksContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  exampleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.jade,
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    width: 165,
    padding: 10,
  },
  chosen: {
    backgroundColor: colors.bluespruce,
    borderColor: colors.collegiate,
    borderWidth: 3,
  },
});
