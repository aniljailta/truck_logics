import {View, Text, Image} from 'react-native';
import React from 'react';
import ImageView from '@/components/ImageView';
import Header from './Header/Header';
import styles from './Styles';
import DispatchCard from './DispatchCard/DispatchCard';

const DashboardScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header />
        <Text style={styles.currentTripText}>Your Current Trip</Text>
        <Image source={require('@/assets/images/mapview.png')} />
        <View>
          <Text style={styles.currentTripText}>Dispatches</Text>
          <DispatchCard />
        </View>
      </View>
    </ImageView>
  );
};

export default DashboardScreen;
