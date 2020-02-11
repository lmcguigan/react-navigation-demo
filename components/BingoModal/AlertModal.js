import React from 'react';
import {BingoModal, BingoText, Button, Divider} from '..';
import {View} from 'react-native';

const AlertModal = props => {
  return (
    <BingoModal visible={props.visible}>
      <View>
        <BingoText content={"head's up"} style="h2" />
        <Divider />
      </View>
      <BingoText content={props.content} />
      <Button label="got it!" onPress={() => props.onConfirm()} />
    </BingoModal>
  );
};

export default AlertModal;
