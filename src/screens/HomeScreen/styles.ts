import {Colors, Spacing, Values} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  contentContainerStyle: {
    padding: Spacing.xl,
    gap: Spacing.m,
  },
  columnWrapperStyle: {
    gap: Spacing.m,
  },
  item: {
    width: (Values.width - 2 * Spacing.xl - Spacing.m) / 2,
    height: 150,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.m,
    padding: Spacing.m,
  },
});

export default styles;
