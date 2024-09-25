import messaging from '@react-native-firebase/messaging';
import notifee, {AuthorizationStatus} from '@notifee/react-native';

async function onAppBootstrap() {
  await messaging().registerDeviceForRemoteMessages();

  const token = await messaging().getToken();
  console.log('token', token);
}

async function createNotificationChannel() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  return channelId;
}

async function displayNotification(title: string, body: string, data = {}) {
  const channelId = await createNotificationChannel();

  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
    data,
  });
}

async function checkNotificationPermission() {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
    console.log('Notification permissions has been authorized');
    return true;
  } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
    console.log('Notification permissions has been denied');
    return false;
  }
}

const onForegroundMessage = () => {
  const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
    if (remoteMessage.notification?.title && remoteMessage.notification?.body) {
      await displayNotification(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
        remoteMessage.data,
      );
    }
  });
  return unsubscribeForeground;
};

export {
  onAppBootstrap,
  displayNotification,
  checkNotificationPermission,
  onForegroundMessage,
};
