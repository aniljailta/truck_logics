import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import AddIcon from '@/assets/svg/AddIcon';
import DispatchDetailNotesIcon from '@/assets/svg/DispatchDetailNotesIcon';
import NotesSubCard from './NotesSubCard';
import {useAppSelector} from '@/hooks/ReduxHooks';

const NotesCard = () => {
  const {dispatchesDetail, isFetching} = useAppSelector(
    state => state.dispatch,
  );
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <DispatchDetailNotesIcon />
          <Text style={styles.title}>Notes</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <AddIcon />
        </TouchableOpacity>
      </View>

      {dispatchesDetail?.notes &&
        dispatchesDetail.notes.map((item, index) => (
          <TouchableOpacity key={`${item.id}-${index}`} onPress={() => {}}>
            <NotesSubCard
              assignedTo=""
              body={item.body}
              createdAt={item.created_at}
              createdBy={item.created_by}
              completedAt={item.completed_at ?? ''}
              completedBy={item.completed_by ?? ''}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default NotesCard;
