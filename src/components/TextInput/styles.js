import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
  container: {
    paddingVertical: 0, // top and bottom
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  TInput: {
    flex: 1,
    fontSize: normalize(13),
    color: colors.greyDarker,
    backgroundColor: colors.white,
    // backgroundColor: 'pink',
    height: wp('12%'),
  },

  helperText: {
    marginTop: -5,
    marginLeft: -5,
    fontSize: normalize(13),
  },
});
