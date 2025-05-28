import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RiskViewScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const stored = await AsyncStorage.getItem('entries');
      const data = stored ? JSON.parse(stored) : [];
      setEntries(data.reverse());
    };

    loadData();
  }, []);

  const evaluateRisk = (humidity, inclination) => {
    if (humidity > 80 && inclination > 25) {
      return 'ALTO RISCO';
    } else if (humidity > 60 || inclination > 20) {
      return 'Risco Moderado';
    }
    return 'Baixo Risco';
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text>Umidade: {item.humidity}%</Text>
      <Text>Inclinação: {item.inclination}°</Text>
      <Text style={styles.riskLevel}>Nível: {evaluateRisk(item.humidity, item.inclination)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualização de Riscos</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
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
  riskLevel: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
