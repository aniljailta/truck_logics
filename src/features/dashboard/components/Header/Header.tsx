import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './Style';
import { useAppSelector } from '@/hooks/ReduxHooks';
import NotificationIcon from '@/assets/svg/NotificationIcon';
import ArrowBack from '@/assets/svg/ArrowBack';

const Header = ({ isDashboard, isDispatchesList, }: { isDashboard?: boolean, isDispatchesList?: boolean, }) => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      {
        isDashboard ? (<View style={styles.userInfoContainer}>
          <Image
            source={require('@/assets/images/image.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.titleText}>Trend Transport</Text>
            <Text style={styles.emailText}>{user?.email}</Text>
          </View>
        </View>) : (<View style={styles.headerRow}>
          <ArrowBack />
          <Text style={styles.headerText}>DIS-10044</Text>

        </View>)
      }
      <NotificationIcon />
    </View>
  );
};

export default Header;
