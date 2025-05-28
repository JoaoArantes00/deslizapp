import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const stored = await AsyncStorage.getItem('entries');
      const data = stored ? JSON.parse(stored) : [];
      setEntries(data.reverse());
    };

    loadData();
  }, []);

  const clearHistory = async () => {
    Alert.alert('Confirmar', 'Deseja apagar todo o histórico?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Apagar',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('entries');
          setEntries([]);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text>Umidade: {item.humidity}%</Text>
      <Text>Inclinação: {item.inclination}°</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Leituras</Text>
      <Button title="Limpar Histórico" onPress={clearHistory} color="#c00" />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});
