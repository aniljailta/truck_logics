import CommonButton from '@/components/CommonButton/CommonButton';
import {ScrollView, View} from 'react-native';
import CheckCallsListCard from '../../Cards/CheckCallsAndDocsListCard/CheckCallsAndDocsListCard';
import styles from './Styles';
import {appMargins} from '@/constants/Styles';
import { useAppSelector } from '@/hooks/ReduxHooks';
import { formatDateTime } from '@/helpers/utility';

const CheckAllCallsScreen = () => {
  const { dispatchesDetail } = useAppSelector(
    state => state.dispatch,
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        {
          dispatchesDetail?.ftl_statuses.map((item) => (
            <CheckCallsListCard
            key={item.id}
            date={formatDateTime(item.date_and_time).formattedDate}
            time={formatDateTime(item.date_and_time).formattedTime}
            status={item.status}
          />
          ))
         
        }
        <View
          style={{
            marginTop: appMargins.MARGIN_50,
          }}>
          <CommonButton
            title={'Add Check Calls'}
            onPress={() => {}}
            isLoading={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default CheckAllCallsScreen;
