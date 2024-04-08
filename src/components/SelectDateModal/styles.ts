import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: Spacing.xl,
    paddingBottom: 36,
  },
  paddingContainer: {
    justifyContent: 'center',
    paddingBottom: Spacing.xl,
  },
  handle: {
    margin: -Spacing.m,
    padding: Spacing.zero,
  },
  handleIndicator: {
    height: Spacing.xxs,
    width: 40,
    backgroundColor: Colors.TEXT,
  },
  closeButton: {
    justifyContent: 'flex-end',
    marginBottom: Spacing.m,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  bottomSheetView: {
    padding: Spacing.xl,
    paddingBottom: 2 * Spacing.xl,
    backgroundColor: Colors.DARK_BLUE,
  },
});

export default styles;
