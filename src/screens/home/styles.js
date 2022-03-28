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
  logoContainer: {
    marginVertical: margin.lg,
  },
  logo: {
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: '80%',
    backgroundColor: colors.lightOpacity,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 20,
  },
  searchIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: fontFamily.fontRegular,
    padding: padding.sm,
    fontSize: fontSize.button,
  },
  categorias: {
    marginVertical: margin.lg,
  },
  tituloCategorias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subtitloCategorias: {
    fontFamily: fontFamily.fontSemiBold,
    fontSize: fontSize.button,
  },
  textoCategorias: {
    fontFamily: fontFamily.fontRegular,
    fontSize: fontSize.text,
    color: colors.secondary,
  },
  listContainer: {
    flex: 1,
    marginVertical: margin.lg,
  },
  item: {
    marginHorizontal: margin.sm,
  },
  cardImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  titleCard: {
    maxWidth: 100,
    textAlign: 'center',
  },
});
