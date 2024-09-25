import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import ImageView from '@/components/ImageView/ImageView';
import Header from '@/components/Header/Header';
import {
  useAppNavigation,
  useAppSelector,
  useAppDispatch,
} from '@/hooks/ReduxHooks';
import DispatchesListCard from '../Cards/DispatchesListCard/DispatchesListCard';
import styles from './Styles';
import {dispatchListRequest} from '../../slice';
import {formatDateTime} from '@/helpers/utility';

const DispatchesScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dispatchListRequest());
  }, [dispatch]);

  const {dispatches, isFetching} = useAppSelector(state => state.dispatch);
  const navigation = useAppNavigation();

  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header isDispatchesList={true} headerText="" />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={dispatches}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({item}) => {
            const pickupDateTime = formatDateTime(item.start_date);
            const deliveryDateTime = formatDateTime(
              item.ftl_statuses[0].date_and_time,
            );
            
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DispatchDetailScreen', {id: item.id});
                }}>
                <DispatchesListCard
                  dispatchNumber={item.id}
                  status={item.ftl_statuses[0].status}
                  pickup={{
                    location: `${item.pickup_address.city}, ${item.pickup_address.state}`,
                    date: pickupDateTime.formattedDate,
                    time: pickupDateTime.formattedTime,
                  }}
                  delivery={{
                    location: `${item.drop_address.city}, ${item.drop_address.state}`,
                    date: deliveryDateTime.formattedDate,
                    time: deliveryDateTime.formattedTime,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ImageView>
  );
};

export default DispatchesScreen;
