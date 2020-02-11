import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {
  AddValueRow,
  ChipGroup,
  Button,
  AlertModal,
  AwaitModal,
} from '../components';
import {canAddValue, arrayWithValueAdded} from '../utilities/utilities';

export default class CreateInviteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invitees: [],
      warningModalVisible: false,
      loadingModalVisible: false,
    };
  }
  _addValue() {
    const {invitees, value} = this.state;
    if (canAddValue(invitees, value)) {
      this.setState({
        invitees: arrayWithValueAdded(invitees, value),
        value: '',
      });
    } else {
      this.setState({warningModalVisible: true});
    }
  }
  _removeItem(e) {
    const newArray = this.state.invitees.filter(value => value !== e);
    this.setState({invitees: newArray});
  }
  _finish = () => {
    this.setState({loadingModalVisible: false});
    //TODO: Navigate back home
  };
  render() {
    return (
      <View style={[styles.screenContainer, styles.screenHorizontalPadding]}>
        <ChipGroup
          items={this.state.invitees}
          onRemoveItem={e => this._removeItem(e)}
        />
        <AddValueRow
          placeholder="enter a friend's email address"
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onAddValue={() => this._addValue()}
        />
        <Button
          label="start your game"
          onPress={() => this.setState({loadingModalVisible: true})}
        />
        <AlertModal
          visible={this.state.warningModalVisible}
          onConfirm={() => this.setState({warningModalVisible: false})}
        />
        <AwaitModal
          header="success!"
          content="Your game has been successfully created and will appear in your list of active games."
          visible={this.state.loadingModalVisible}
          onConfirm={() => this._finish()}
        />
      </View>
    );
  }
}
