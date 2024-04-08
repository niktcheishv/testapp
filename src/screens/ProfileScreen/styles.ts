import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    padding: Spacing.xl,
    justifyContent: 'space-between',
  },
  save: {
    color: Colors.DARK_BLUE,
  },
});

export default styles;
