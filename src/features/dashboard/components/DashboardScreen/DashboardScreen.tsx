import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import DashboardPickupIcon from '@/assets/svg/DashboardPickupIcon';
import appColor from '@/constants/Colors';
import DashboardDeliverIcon from '@/assets/svg/DashboardDeliverIcon';
import DashboardActiveIcon from '@/assets/svg/DashboardActiveIcon';
import DashboardWaitingIcon from '@/assets/svg/DashboardWaitingIcon';
import ImageView from '@/components/ImageView/ImageView';
import styles from './Styles';
import Header from '@/components/Header/Header';
import DispatchCard from '../DispatchCard/DispatchCard';
import {useAppDispatch} from '@/hooks/ReduxHooks';
import {dashboardStatsRequest} from '../../slice';

const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardStatsRequest());
  }, []);
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header isDashboard={true} headerText="" />
        <Text style={styles.currentTripText}>Your Current Trip</Text>

        <Image
          style={styles.mapImage}
          source={require('@/assets/images/mapview.png')}
        />

        <View>
          <Text style={styles.currentTripText}>Dispatches</Text>
          <View style={styles.dispatchesColumn}>
            <View style={styles.dispatchesRow}>
              <DispatchCard
                title={'Pickup'}
                count={'25'}
                color={appColor.PICKUP_ORDER_COLOR}
                icon={<DashboardPickupIcon />}
              />
              <DispatchCard
                title={'Deliver'}
                count={'35'}
                color={appColor.DELIVER_ORDER_COLOR}
                icon={<DashboardDeliverIcon />}
              />
            </View>
            <View style={styles.dispatchesRow}>
              <DispatchCard
                title={'Active'}
                count={'25'}
                color={appColor.ACTIVE_ORDER_COLOR}
                icon={<DashboardActiveIcon />}
              />
              <DispatchCard
                title={'Awaiting'}
                count={'35'}
                color={appColor.APP_ORANGE_COLOR}
                icon={<DashboardWaitingIcon />}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageView>
  );
};

export default DashboardScreen;
