/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../constants/theme';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
  linearGradient: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
  },
  buttonContainer: {
    marginTop: 100,
  },
  buttonText: {
    borderRadius: 12,
    textAlign: 'center',
    color: colors.text,
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
    width: 145,
    backgroundColor: colors.darkOpacity,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: fontSize.button,
  },
});
