/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import store from '@/app/store';
import MainStack from '@/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {
  checkNotificationPermission,
  onAppBootstrap,
  onForegroundMessage,
} from './notification-service';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Toast from 'react-native-toast-message';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    checkNotificationPermission().then(hasPermissions => {
      if (hasPermissions) {
        onAppBootstrap();
      } else {
        console.log('no notification permissions granted');
      }
    });
    const unsubscribeForeground = onForegroundMessage();
    return () => {
      unsubscribeForeground();
    };
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainStack />
        <Toast />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
