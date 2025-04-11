import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  const isOperator = ['/', '*', '-', '+'].includes(title);
  const isSpecial = ['=', '.'].includes(title);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isSpecial && styles.specialButton,
        title === 'C' && styles.clearButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          (isOperator || isSpecial) && styles.coloredText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  coloredText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  operatorButton: {
    backgroundColor: '#2B6F81',
  },
  specialButton: {
    backgroundColor: '#FFA726',
  },
  clearButton: {
    backgroundColor: '#D64B41',
  },
});

export default Button;
