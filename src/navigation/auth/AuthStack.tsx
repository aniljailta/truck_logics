import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@/features/auth/components/Login/LoginScreen';

export type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
