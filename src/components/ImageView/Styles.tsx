import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export default styles;
