import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/hooks/ReduxHooks';
import {dashboardStatsRequest} from '../../slice';
import DashboardPickupIcon from '@/assets/svg/DashboardPickupIcon';
import DashboardDeliverIcon from '@/assets/svg/DashboardDeliverIcon';
import DashboardActiveIcon from '@/assets/svg/DashboardActiveIcon';
import DashboardWaitingIcon from '@/assets/svg/DashboardWaitingIcon';
import appColor from '@/constants/Colors';
import ImageView from '@/components/ImageView/ImageView';
import styles from './Styles';
import Header from '@/components/Header/Header';
import DispatchCard from '../DispatchCard/DispatchCard';

const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  const {dispatchStats, isFetching} = useAppSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(dashboardStatsRequest());
  }, [dispatch]);

  const renderDispatchCards = () => (
    <View style={styles.dispatchesColumn}>
      <View style={styles.dispatchesRow}>
        <DispatchCard
          title="Pickup"
          count={dispatchStats?.stats.assigned}
          color={appColor.PICKUP_ORDER_COLOR}
          icon={<DashboardPickupIcon />}
        />
        <DispatchCard
          title="Deliver"
          count={dispatchStats?.stats.delivered}
          color={appColor.DELIVER_ORDER_COLOR}
          icon={<DashboardDeliverIcon />}
        />
      </View>
      <View style={styles.dispatchesRow}>
        <DispatchCard
          title="Active"
          count={dispatchStats?.stats.active}
          color={appColor.ACTIVE_ORDER_COLOR}
          icon={<DashboardActiveIcon />}
        />
        <DispatchCard
          title="Awaiting"
          count={dispatchStats?.stats.unassigned}
          color={appColor.APP_ORANGE_COLOR}
          icon={<DashboardWaitingIcon />}
        />
      </View>
    </View>
  );

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
          {isFetching ? (
            <ActivityIndicator size="large" color={appColor.APP_ORANGE_COLOR} />
          ) : (
            renderDispatchCards()
          )}
        </View>
      </View>
    </ImageView>
  );
};

export default DashboardScreen;
