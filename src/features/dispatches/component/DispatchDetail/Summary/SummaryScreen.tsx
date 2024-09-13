import React from 'react';
import DispatchesListCard from '../../Cards/DispatchesListCard/DispatchesListCard';
import RecentCheckCallCard from '../../Cards/CheckCallCard/CheckCallCard';

const SummaryScreen = () => {
  return (
    <>
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
      <RecentCheckCallCard
        deliveryInfo="Delivered at Renton, WA"
        date="07/08/2024"
        time="10:22 AM"
      />
    </>
  );
};

export default SummaryScreen;
