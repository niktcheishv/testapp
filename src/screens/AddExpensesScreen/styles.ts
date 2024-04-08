import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    padding: Spacing.xl,
    justifyContent: 'space-between',
  },
  date: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.TEXT,
    height: 45,
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  rating: {
    marginTop: Spacing.xl,
  },
  category: {
    color: Colors.PRIMARY,
  },
});

export default styles;
