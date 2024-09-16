import Header from '@/components/Header/Header';
import ImageView from '@/components/ImageView/ImageView';
import React from 'react';
import {View} from 'react-native';
import CustomTabBar from './Common/CustomTabbar';
import DocsListScreen from './DocsList/DocsListScreen';
import styles from './Styles';

const DispatchDetailScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header headerText="DIS-10044" />
        <CustomTabBar />
        {/* <SummaryScreen /> */}
        {/* <CheckAllCallsScreen /> */}
        <DocsListScreen />
      </View>
    </ImageView>
  );
};

export default DispatchDetailScreen;
