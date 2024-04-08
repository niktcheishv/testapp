import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '@constants';

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    flexDirection: 'row',
    marginTop: Spacing.xs,
    gap: Spacing.s,
  },
});

export default styles;
