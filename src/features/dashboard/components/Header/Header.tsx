import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Style';
import {useAppSelector} from '@/hooks/ReduxHooks';
import NotificationIcon from '@/assets/svg/NotificationIcon';

const Header = () => {
  const {user} = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require('@/assets/images/image.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.titleText}>Trend Transport</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
      <NotificationIcon />
    </View>
  );
};

export default Header;
