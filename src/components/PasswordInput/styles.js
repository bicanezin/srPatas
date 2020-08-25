import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../styles';

const { width, height } = Dimensions.get('window');
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp('8%'), // right and left
  },
  formView: {
    paddingVertical: 0, // top and bottom
    // height: hp("10%"),

    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: normalize(13),
    color: colors.greyDarker,
    backgroundColor: colors.white,
    // backgroundColor: 'pink',
    height: wp('12%'),
  },
  iconView: {
    position: 'absolute',
    // backgroundColor: colors.red,
    right: 0,
    // bottom: hp('1%'),
  },
  eyes: {
    color: colors.grey,
  },
  helperText: {
    marginTop: -5,
    marginLeft: -5,
    fontSize: normalize(13),
  },
});
