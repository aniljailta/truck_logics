import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import {useAppNavigation, useAppSelector} from '@/hooks/ReduxHooks';
import NotificationIcon from '@/assets/svg/NotificationIcon';
import ArrowBack from '@/assets/svg/ArrowBack';
import CustomDropdown from '@/components/CommonDropDown/CommonDropDown';

const Header = ({
  isDashboard,
  isDispatchesList,
  headerText,
}: {
  isDashboard?: boolean;
  isDispatchesList?: boolean;
  headerText: string;
}) => {
  const options = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];

  const handleSelect = (item: {label: string; value: string}) => {
    console.log(item);
  };

  const {user} = useAppSelector(state => state.auth);
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      {isDashboard ? (
        <View style={styles.userInfoContainer}>
          <Image
            source={require('@/assets/images/image.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.titleText}>Trend Transport</Text>
            <Text style={styles.emailText}>{user?.email}</Text>
          </View>
        </View>
      ) : isDispatchesList ? (
        <View style={styles.headerRow}>
          <CustomDropdown options={options} onSelect={handleSelect} />
        </View>
      ) : (
        <View style={styles.headerRow}>
          {headerText != 'History' && (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <ArrowBack />
            </TouchableOpacity>
          )}

          <Text style={styles.headerText}>{headerText}</Text>
        </View>
      )}
      <NotificationIcon />
    </View>
  );
};

export default Header;
