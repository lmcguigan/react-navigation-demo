import {StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.wafer,
  },
  screenVerticalPadding: {
    paddingVertical: 150,
  },
  screenHorizontalPadding: {
    paddingHorizontal: 30,
  },
  instructionsContainer: {
    paddingBottom: 20,
  },
});
