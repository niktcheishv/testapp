import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: Spacing.xl,
  },
  cont: {
    padding: 14,
    borderRadius: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  dark: {
    color: Colors.DARK_BLUE,
  },
  disabled: {
    opacity: 0.7,
  },
});

export default styles;
