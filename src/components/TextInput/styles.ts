import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    marginTop: Spacing.lg,
    color: Colors.TEXT,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TEXT,
    padding: Spacing.zero,
  },
});

export default styles;
