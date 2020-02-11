import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {
  BingoCard,
  Button,
  BingoTextInput,
  BingoText,
  AlertModal,
} from '../components';
import {getUpdatedCard, getNewBingoArray} from '../utilities/utilities';

export default class CreatePreviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      values: getNewBingoArray(
        props.navigation.getParam('values'),
        props.navigation.getParam('size'),
      ),
      modalVisible: false,
    };
  }
  onPressItem(index) {
    this.setState({values: getUpdatedCard(index, this.state.values)});
  }
  render() {
    const {values, modalVisible, title} = this.state;
    return (
      <View style={[styles.screenContainer, styles.screenHorizontalPadding]}>
        <View style={styles.instructionsContainer}>
          <BingoText content="Here's an example card. The order will be randomized for each friend you invite to play." />
        </View>
        <BingoCard
          values={values}
          onPressItem={index => this.onPressItem(index)}
        />
        <View style={styles.instructionsContainer}>
          <BingoText
            content="Enter a name for your game to proceed."
            style="h4"
          />
        </View>
        <BingoTextInput onChangeText={text => this.setState({title: text})} />
        <Button
          label="next"
          onPress={() => {
            if (title === '') {
              this.setState({modalVisible: true});
            } else {
              this.props.navigation.navigate('Invite');
            }
          }}
        />
        <AlertModal
          visible={modalVisible}
          content="You'll need to give your game a title so your friends can identify it!"
          onConfirm={() => this.setState({modalVisible: false})}
        />
      </View>
    );
  }
}
