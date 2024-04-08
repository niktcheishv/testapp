import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    justifyContent: 'space-between',
    padding: Spacing.xl,
  },
  label: {
    color: Colors.DARK_BLUE,
  },
  loader: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.TEXT,
    height: 45,
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  scrollview: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default styles;
