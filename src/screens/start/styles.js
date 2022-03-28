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
  buttonContainer: {
    marginTop: 100,
  },
});
