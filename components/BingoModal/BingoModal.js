import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const BingoModal = props => {
  return (
    <Modal transparent animationType="fade" visible={props.visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalInner}>{props.children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner: {
    backgroundColor: colors.creme,
    width: '75%',
    minHeight: 250,
    borderRadius: 10,
    padding: 30,
    justifyContent: 'space-around',
  },
  modalContent: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default BingoModal;
