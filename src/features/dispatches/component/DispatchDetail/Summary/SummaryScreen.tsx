import {ScrollView, View} from 'react-native';
import CheckCallCard from '../../Cards/CheckCallCard/CheckCallCard';
import DispatchDetailCard from '../../Cards/DispatchDetailCard/DispatchDetailCard';
import DispatchesListCard from '../../Cards/DispatchesListCard/DispatchesListCard';
import NotesCard from '../../Cards/NotesCard/NotesMainCard';

const SummaryScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View
        style={{
          gap: 20,
        }}>
        <DispatchesListCard
          isDetailScreen={true}
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
        <CheckCallCard
          deliveryInfo="Delivered at Renton, WA"
          date="07/08/2024"
          time="10:22 AM"
        />
        <DispatchDetailCard />
        <NotesCard />
      </View>
    </ScrollView>
  );
};
export default SummaryScreen;
