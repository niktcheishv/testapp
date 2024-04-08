import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    padding: Spacing.xl,
  },
  contentContainer: {
    gap: Spacing.m,
  },
  item: {
    padding: Spacing.ml,
    borderRadius: Spacing.m,
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emprtyContainer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
});

export default styles;
