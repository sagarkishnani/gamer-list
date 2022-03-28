/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../../constants/theme';

export const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 160,
  },
  buttonText: {
    borderRadius: 12,
    textAlign: 'center',
    color: colors.text,
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
    width: 155,
    backgroundColor: colors.darkOpacity,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: fontSize.button,
  },
});
