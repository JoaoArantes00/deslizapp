import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ActionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ações Recomendadas em Caso de Risco</Text>

      <Text style={styles.item}>• Verifique sinais de trincas no solo ou rachaduras em paredes.</Text>
      <Text style={styles.item}>• Evite permanecer em áreas com inclinação acentuada em períodos de chuva.</Text>
      <Text style={styles.item}>• Mantenha calhas e canaletas desobstruídas para facilitar o escoamento de água.</Text>
      <Text style={styles.item}>• Nunca jogue lixo ou entulho em encostas.</Text>
      <Text style={styles.item}>• Em caso de risco iminente, dirija-se imediatamente a um local seguro.</Text>
      <Text style={styles.item}>• Mantenha contato com a Defesa Civil (telefone 199) para emergências.</Text>
      <Text style={styles.item}>• Compartilhe alertas com vizinhos e familiares.</Text>
      <Text style={styles.item}>• Fique atento a sirenes, avisos de SMS e aplicativos de monitoramento.</Text>
      <Text style={styles.item}>• Tenha um plano de evacuação pré-definido com sua família.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F4F8',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
});
