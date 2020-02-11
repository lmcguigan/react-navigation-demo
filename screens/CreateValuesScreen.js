import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {
  AlertModal,
  Button,
  ChipGroup,
  AddValueRow,
  BingoText,
} from '../components';
import data from '../assets/data/data.json';
import {
  getMinimumAmount,
  removeItem,
  canAddValue,
  arrayWithValueAdded,
} from '../utilities/utilities';

export default class CreateValuesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items,
      value: '',
      warningModalVisible: false,
      warningModalContent: '',
    };
  }
  _addValue() {
    const {items, value} = this.state;
    if (canAddValue(items, value)) {
      this.setState({
        items: arrayWithValueAdded(items, value),
        value: '',
      });
    } else {
      this.setState({warningModalVisible: true});
    }
  }
  _onPressNext = () => {
    //TODO: Replace hardcoded value with value from navigation params
    const size = 3;
    const min = getMinimumAmount(size);
    if (this.state.items.length < min) {
      this.setState({
        warningModalVisible: true,
        warningModalContent: `You will need to input at least ${min} values for a ${size}x${size} card.`,
      });
    } else {
      //TODO: Navigate to preview screen, passing values, size, and title
    }
  };
  render() {
    return (
      <View style={[styles.screenContainer, styles.screenHorizontalPadding]}>
        <View style={styles.instructionsContainer}>
          <BingoText content="Enter the references for participants to hear or observe. If you enter more that the minimum, each card will take a randomized selection from the values provided." />
        </View>
        <ChipGroup
          items={this.state.items}
          onRemoveItem={e =>
            this.setState({items: removeItem(e, this.state.items)})
          }
        />
        <AddValueRow
          placeholder="enter items here"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onAddValue={() => this._addValue()}
        />
        <Button label="next" onPress={() => this._onPressNext()} />
        <AlertModal
          visible={this.state.warningModalVisible}
          onConfirm={() => this.setState({warningModalVisible: false})}
          content={this.state.warningModalContent}
        />
      </View>
    );
  }
}
