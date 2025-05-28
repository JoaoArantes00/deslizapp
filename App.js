import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import DataInputScreen from './screens/DataInputScreen';
import RiskViewScreen from './screens/RiskViewScreen';
import HistoryScreen from './screens/HistoryScreen';
import ActionsScreen from './screens/ActionsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="DataInput" component={DataInputScreen} />
        <Stack.Screen name="RiskView" component={RiskViewScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Actions" component={ActionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
