import { View, Text, Image } from 'react-native';
import React from 'react';
import ImageView from '@/components/ImageView';
import styles from './Styles';
import DispatchCard from '../../components/DispatchCard/DispatchCard';
import DashboardPickupIcon from '@/assets/svg/DashboardPickupIcon';
import appColor from '@/constants/Colors';
import DashboardDeliverIcon from '@/assets/svg/DashboardDeliverIcon';
import DashboardActiveIcon from '@/assets/svg/DashboardActiveIcon';
import DashboardWaitingIcon from '@/assets/svg/DashboardWaitingIcon';
import Header from '../../components/Header/Header';


const DashboardScreen = () => {
  return (
    <ImageView>
      <View style={styles.wrapper}>
        <Header isDashboard={true}/>
        <Text style={styles.currentTripText}>Your Current Trip</Text>
 
    <Image
          style={styles.mapImage}
          source={require('@/assets/images/mapview.png')} />

        <View>
          <Text style={styles.currentTripText}>Dispatches</Text>
          <View style={styles.dispatchesColumn}>
            <View style={styles.dispatchesRow}>

              <DispatchCard title={"Pickup"} count={"25"} color={appColor.PICKUP_ORDER_COLOR} icon={<DashboardPickupIcon />} />
              <DispatchCard title={"Deliver"} count={"35"} color={appColor.DELIVER_ORDER_COLOR} icon={<DashboardDeliverIcon />} />
            </View>
            <View style={styles.dispatchesRow}>

              <DispatchCard title={"Active"} count={"25"} color={appColor.ACTIVE_ORDER_COLOR} icon={<DashboardActiveIcon />} />
              <DispatchCard title={"Awaiting your confirmation"} count={"35"} color={appColor.WAITING_ORDER_COLOR} icon={<DashboardWaitingIcon />} />
            </View></View>
        </View>
      </View>
    </ImageView>
  );
};

export default DashboardScreen;
