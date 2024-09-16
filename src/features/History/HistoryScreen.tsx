import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageView from '@/components/ImageView/ImageView';
import Header from '@/components/Header/Header';
import {useAppNavigation} from '@/hooks/ReduxHooks';
import DispatchesListCard from '../dispatches/component/Cards/DispatchesListCard/DispatchesListCard';
import styles from './Styles';

const HistoryScreen = () => {
  const navigation = useAppNavigation();
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header headerText="History" />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DispatchDetailScreen');
          }}>
          <DispatchesListCard
            dispatchNumber="DN12345"
            status="In Transit"
            pickup={{
              location: 'New York, NY',
              date: '2023-09-15',
              time: '10:00 AM',
            }}
            delivery={{
              location: 'Los Angeles, CA',
              date: '2023-09-17',
              time: '2:00 PM',
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageView>
  );
};

export default HistoryScreen;
