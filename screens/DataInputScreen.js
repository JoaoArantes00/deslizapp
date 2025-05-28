import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
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
      <Image
        source={require('../assets/icon_data.png')}
        style={styles.icon}
      />

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
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
});
