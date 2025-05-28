import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataInputScreen() {
  const [humidity, setHumidity] = useState('');
  const [inclination, setInclination] = useState('');

  const saveData = async () => {
    if (!humidity || !inclination) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      humidity: parseFloat(humidity),
      inclination: parseFloat(inclination),
      date: new Date().toLocaleString(),
    };

    try {
      const existingData = await AsyncStorage.getItem('entries');
      const entries = existingData ? JSON.parse(existingData) : [];
      entries.push(newEntry);
      await AsyncStorage.setItem('entries', JSON.stringify(entries));
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      setHumidity('');
      setInclination('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Umidade (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={humidity}
        onChangeText={setHumidity}
        placeholder="Ex: 85"
      />
      <Text style={styles.label}>Inclinação (°)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inclination}
        onChangeText={setInclination}
        placeholder="Ex: 27"
      />
      <Button title="Salvar Dados" onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E8F0FE',
  },
  label: {
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
