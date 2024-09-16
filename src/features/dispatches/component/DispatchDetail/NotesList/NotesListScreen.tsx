import {ScrollView, View} from 'react-native';
import NotesCard from '../../Cards/NotesCard/NotesMainCard';
import styles from './Styles';

const NotesListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        <NotesCard />
        <NotesCard />
      </View>
    </ScrollView>
  );
};
export default NotesListScreen;
