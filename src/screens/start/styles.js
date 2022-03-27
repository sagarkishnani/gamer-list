/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../constants/theme';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: fontFamily.fontRegular,
    color: colors.textOpacity,
    marginHorizontal: 14,
    textAlign: 'center',
    fontSize: fontSize.text,
  },
});
