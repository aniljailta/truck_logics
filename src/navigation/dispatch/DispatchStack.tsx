import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DispatchesScreen from '@/features/dispatches/component/DispatchList/DispatchesScreen';
import DispatchDetailScreen from '@/features/dispatches/component/DispatchDetail/DispatchDetailScreen';

export type DispatchStackParamList = {
  DispatchesScreen: undefined;
  DispatchDetailScreen: {id: number};
};

const Stack = createNativeStackNavigator<DispatchStackParamList>();

const DispatchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DispatchesScreen" component={DispatchesScreen} />
      <Stack.Screen
        name="DispatchDetailScreen"
        component={DispatchDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default DispatchStack;
