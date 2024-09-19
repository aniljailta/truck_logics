import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppDispatch} from '@/app/store';
import {useAppSelector} from '@/hooks/ReduxHooks';
import SplashStack from './splash/SplashStack';

import {hideSplash, refreshTokenSuccess} from '@/features/auth/slice';
import {checkToken} from '@/helpers/checkToken';
import DashboardStack from './dashboard/DashboardStack';
import AuthStack from './auth/AuthStack';

type MainStackParamList = {
  screenName: undefined;
};
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  const dispatch = useAppDispatch();

  const {isLoading, token} = useAppSelector(state => state.auth);

  useEffect(() => {
    checkToken()
      .then(token => {
        if (token) {
          dispatch(refreshTokenSuccess(token));
        }
        dispatch(hideSplash());
      })
      .catch(e => console.error(e));
  }, []);

  let screenName: any;
  let screenComponent;
  switch (true) {
    case isLoading === true:
      screenName = 'SplashStack';
      screenComponent = SplashStack;
      break;
    case token !== null:
      screenName = 'DashboardStack';
      screenComponent = DashboardStack;
      break;
    default:
      screenName = 'AuthStack';
      screenComponent = AuthStack;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenName} component={screenComponent} />
    </Stack.Navigator>
  );
};

export default MainStack;
