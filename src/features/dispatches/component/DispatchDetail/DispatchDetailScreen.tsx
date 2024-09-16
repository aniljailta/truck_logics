import Header from '@/components/Header/Header';
import ImageView from '@/components/ImageView/ImageView';
import React from 'react';
import {View} from 'react-native';
import CheckAllCallsScreen from './CheckCallsList/CheckAllCallsScreen';
import CustomTabBar from './Common/CustomTabbar';
import styles from './Styles';

const DispatchDetailScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header />
        <CustomTabBar />
        {/* <SummaryScreen /> */}
        <CheckAllCallsScreen />
      </View>
    </ImageView>
  );
};

export default DispatchDetailScreen;
