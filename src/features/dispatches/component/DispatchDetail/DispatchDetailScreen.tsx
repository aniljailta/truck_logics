import {View} from 'react-native';
import React from 'react';
import ImageView from '@/components/ImageView/ImageView';
import styles from './Styles';
import Header from '@/components/Header/Header';

const DispatchDetailScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header />
      </View>
    </ImageView>
  );
};

export default DispatchDetailScreen;
