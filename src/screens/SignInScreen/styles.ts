import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

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
    alignSelf: 'center',
  },
  signup: {
    marginTop: Spacing.lg,
    marginLeft: Spacing.xs,
  },
  pic: {
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  numberInput: {
    marginTop: Spacing.xl,
    width: '50%',
    alignSelf: 'center',
  },
  otpInput: {
    alignSelf: 'center',
    width: '30%',
    marginTop: Spacing.xl,
  },
  disbaled: {
    opacity: 0.7,
  },
});

export default styles;
