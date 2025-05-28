import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Monitor de Deslizamentos</Text>
      <Text style={styles.subtitle}>Monitore riscos com sensores de umidade e inclinação.</Text>
      <Button title="Inserir Dados" onPress={() => navigation.navigate('DataInput')} />
      <Button title="Ver Riscos" onPress={() => navigation.navigate('RiskView')} />
      <Button title="Histórico" onPress={() => navigation.navigate('History')} />
      <Button title="Ações Recomendadas" onPress={() => navigation.navigate('Actions')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
});
