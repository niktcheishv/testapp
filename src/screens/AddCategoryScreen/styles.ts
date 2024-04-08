import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xl,
    justifyContent: 'space-between',
    backgroundColor: Colors.DARK_BLUE,
  },
  disabled: {
    opacity: 0.7,
  },
});

export default styles;
