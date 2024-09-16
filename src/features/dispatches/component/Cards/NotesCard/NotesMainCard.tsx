import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import AddIcon from '@/assets/svg/AddIcon';
import DispatchDetailNotesIcon from '@/assets/svg/DispatchDetailNotesIcon';
import NotesSubCard from './NotesSubCard';

const noteDetailsSubheading = () => {
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
      <NotesSubCard />
      <NotesSubCard />
    </View>
  );
};

export default noteDetailsSubheading;
