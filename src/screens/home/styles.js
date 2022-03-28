/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../constants/theme';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.primaryBackground,
  },
  background: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  input: {
    height: height * 0.07,
    borderRadius: 12,
    color: colors.primary,
    backgroundColor: colors.lightOpacity,
    marginBottom: margin.sm,
    padding: padding.sm,
    width: '80%',
    fontSize: fontSize.button,
    alignSelf: 'center',
  },
});
