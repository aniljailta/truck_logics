import {View} from 'react-native';
import React from 'react';
import ImageView from '@/components/ImageView/ImageView';
import styles from './Styles';
import Header from '@/components/Header/Header';
import CustomTabBar from './Common/CustomTabbar';
import SummaryScreen from './Summary/SummaryScreen';

const DispatchDetailScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header />
        <CustomTabBar />
        <SummaryScreen />
      </View>
    </ImageView>
  );
};

export default DispatchDetailScreen;
