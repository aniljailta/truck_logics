import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import AddIcon from '@/assets/svg/AddIcon';
import DispatchDetailNotesIcon from '@/assets/svg/DispatchDetailNotesIcon';
import NotesSubCard from './NotesSubCard';
import {useAppSelector} from '@/hooks/ReduxHooks';
import NotesNotFound from '@/assets/svg/NotesNotFound';
import { appGap } from '@/constants/Styles';

const NotesCard = () => {
  const {dispatchesDetail} = useAppSelector(
    state => state.dispatch,
  );
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <DispatchDetailNotesIcon />
          <Text style={styles.title}>Notes</Text>
        </View>
        {dispatchesDetail && dispatchesDetail?.notes.length && <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <AddIcon />
        </TouchableOpacity>}
      </View>

      {dispatchesDetail && dispatchesDetail?.notes.length ?
        dispatchesDetail.notes.map((item, index) => (
          <TouchableOpacity key={`${item.id}-${index}`} onPress={() => {}}>
            <NotesSubCard
              assignedTo={item.assignee.name}
              body={item.body}
              createdAt={item.creator.created_at}
              createdBy={item.creator.name}
              completedAt={item.completed_at ?? ''}
              completedBy={item.completor.name}
            />
          </TouchableOpacity>
        )): <View style={{justifyContent: 'center', alignItems: 'center', gap: appGap.gap_32}}>
        <NotesNotFound/>
        
        <TouchableOpacity style={styles.addNotesButton} onPress={()=>{}}>
          <Text style={styles.addNotesText}>Add Notes</Text>
        </TouchableOpacity>
        </View>}
    </View>
  );
};

export default NotesCard;
