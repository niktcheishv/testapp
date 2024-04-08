import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '@constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.DARK_BLUE,
  },
  error: {
    color: Colors.FAILURE,
    marginTop: Spacing.md,
  },
  signin: {
    marginTop: Spacing.lg,
    marginLeft: Spacing.xs,
  },
  pic: {
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  inputs: {
    marginTop: Spacing.xl,
  },
  disabled: {
    opacity: 0.7,
  },
  buttonContainer: {
    padding: Spacing.xl,
  },
});

export default styles;
