import React, {useState, useEffect} from 'react';
import {BingoModal, BingoText, Button, Divider} from '..';
import {View, ActivityIndicator} from 'react-native';
import {delay} from '../../utilities/utilities';
import {colors} from '../../assets/colors';

const AwaitModal = props => {
  const [loading, setLoading] = useState(true);
  const load = async () => {
    await delay();
    setLoading(false);
  };
  useEffect(() => {
    if (props.visible) {
      load();
    }
  }, [props.visible]);
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <BingoText content="please wait" style="h2" />
          <ActivityIndicator size="large" color={colors.rhodochrosite} />
        </>
      );
    } else {
      return (
        <>
          <View>
            <BingoText content={props.header} style="h2" />
            <Divider />
          </View>
          <BingoText content={props.content} />
          <Button label="got it!" onPress={() => props.onConfirm()} />
        </>
      );
    }
  };
  return <BingoModal visible={props.visible}>{renderContent()}</BingoModal>;
};

export default AwaitModal;
