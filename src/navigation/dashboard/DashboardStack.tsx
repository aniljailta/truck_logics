import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabStack from '../TabStack';
import DispatchDetailScreen from '@/features/dispatches/component/DispatchDetail/DispatchDetailScreen';

type DashboardStackParamList = {
  TabStack: undefined;
  DispatchDetailScreen: undefined;
};
const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen
        name="DispatchDetailScreen"
        component={DispatchDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
