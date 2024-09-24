import {View} from 'react-native';
import NotesCard from '../../Cards/NotesCard/NotesMainCard';
import styles from './Styles';

const NotesListScreen = () => {
  return (
    <View style={styles.container}>
      <NotesCard />
    </View>
  );
};
export default NotesListScreen;
