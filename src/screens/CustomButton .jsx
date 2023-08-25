import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ backgroundColor, fontColor, onPress }) => {
  const handlePress = () => {
    console.log('Botão foi clicado!');
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, { color: fontColor }]}>Clique aqui</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008d',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default CustomButton;