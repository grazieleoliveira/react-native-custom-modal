/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

interface ModalProps {
  onClose: () => void;
  onOk: () => void;
  visible: boolean;
  title: string;
  description?: string | undefined;
  buttonText?: string | undefined;
}

function MyModal({
  onClose,
  onOk,
  visible,
  title,
  description,
  buttonText = 'Ok',
}: ModalProps) {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableOpacity onPress={() => onClose()} style={styles.container} />
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => onClose()} style={styles.close}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Image
            fadeDuration={0}
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/christmas-gift.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => onOk()} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(96,96,96,0.7)',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 50,
    marginVertical: 100,
    borderRadius: 20,
  },
  content: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    alignItems: 'flex-end',
    width: '100%',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#7a7a7a',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#ff564f',
    borderRadius: 20,
    marginHorizontal: 80,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MyModal;
