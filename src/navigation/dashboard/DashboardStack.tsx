import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from '../TabStack';

type DashboardStackParamList = {
  TabStack: undefined;
};
const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
