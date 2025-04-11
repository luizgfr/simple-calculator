import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from './components/Button';
import { buttons } from './utils/operations';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const res = eval(input);
        setResult(res.toString());
      } catch {
        setResult('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
      {buttons.map((row: string[], rowIndex: number) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((btn: string) => (
            <Button key={btn} title={btn} onPress={() => handlePress(btn)} />
          ))}
        </View>
      ))}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'flex-end' },
  display: { padding: 20, alignItems: 'flex-end' },
  input: { color: '#fff', fontSize: 36 },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA726',
    textAlign: 'right',
    marginBottom: 20,
  },  
  buttonsContainer: { padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
