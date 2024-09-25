import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import CheckCallCard from '../../Cards/CheckCallCard/CheckCallCard';
import DispatchDetailCard from '../../Cards/DispatchDetailCard/DispatchDetailCard';
import DispatchesListCard from '../../Cards/DispatchesListCard/DispatchesListCard';
import NotesCard from '../../Cards/NotesCard/NotesMainCard';
import styles from './Styles';
import { useAppSelector } from '@/hooks/ReduxHooks';
import { formatDateTime } from '@/helpers/utility';

const SummaryScreen = () => {
  const { dispatchesDetail, isFetching } = useAppSelector(
    state => state.dispatch,
  );
  
  if (isFetching) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.container}>
          {
            dispatchesDetail &&  <DispatchesListCard
            isDetailScreen={true}
            dispatchNumber={0}
            status=""
            pickup={{
              location: `${dispatchesDetail?.pickup_address.city}, ${dispatchesDetail?.pickup_address.state}`,
              date: formatDateTime(dispatchesDetail?.start_date)
                .formattedDate,
              time: formatDateTime(dispatchesDetail?.start_date)
                .formattedTime,
            }}
            delivery={{
              location: `${dispatchesDetail?.drop_address.city}, ${dispatchesDetail?.drop_address.state}`,
              date: formatDateTime(
                dispatchesDetail?.ftl_statuses[0].date_and_time ?? '',
              ).formattedDate,
              time: formatDateTime(
                dispatchesDetail?.ftl_statuses[0].date_and_time ?? '',
              ).formattedTime,
            }}
          />
          }
         
          {
            dispatchesDetail && <CheckCallCard
              deliveryInfo={dispatchesDetail.ftl_statuses[0].desc}
              date={formatDateTime(dispatchesDetail.ftl_statuses[0].date_and_time).formattedDate}
              time={formatDateTime(dispatchesDetail.ftl_statuses[0].date_and_time).formattedTime}
            />
          }

          <DispatchDetailCard />
          <NotesCard />
        </View>
      </ScrollView>
    );
  }
};

export default SummaryScreen;
