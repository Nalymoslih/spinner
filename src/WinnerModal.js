import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import ConfettiCannon from 'react-native-confetti-cannon';

const WinnerModal = ({isVisible, winner, onClose}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Winner:</Text>
        <Text style={styles.winnerText}>{winner}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default WinnerModal;
