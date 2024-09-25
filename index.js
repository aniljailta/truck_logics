/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {displayNotification} from './notification-service';

if (__DEV__) {
  require('./ReactotronConfig');
}
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in background remote', remoteMessage);
  displayNotification(
    remoteMessage.notification.title,
    remoteMessage.notification.body,
    remoteMessage.data,
  );
});

AppRegistry.registerComponent(appName, () => App);
