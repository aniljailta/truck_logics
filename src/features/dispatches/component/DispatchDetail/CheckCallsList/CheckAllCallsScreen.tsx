import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CheckCallsListCard from '../../Cards/CheckCallsListCard/CheckCallsListCard';
import styles from './Styles';
import CommonButton from '@/components/CommonButton/CommonButton';

const CheckAllCallsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        <CheckCallsListCard />
        <CheckCallsListCard />
        <CheckCallsListCard />
        <CheckCallsListCard />
        <CommonButton
          title={'Add Check Calls'}
          onPress={() => {}}
          isLoading={false}
        />
      </View>
    </ScrollView>
  );
};
export default CheckAllCallsScreen;
