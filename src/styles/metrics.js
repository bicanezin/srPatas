import { Dimensions, PixelRatio } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export default {
  fontSize5: normalize(5),
  fontSize8: normalize(8),
  fontSize9: normalize(9),
  fontSize10: normalize(10),
  fontSize11: normalize(11),
  fontSize12: normalize(12),
  fontSize13: normalize(13),
  fontSize14: normalize(14),
  fontSize15: normalize(15),
  fontSize16: normalize(16),
  fontSize17: normalize(17),
  fontSize18: normalize(18),
  fontSize19: normalize(19),
  fontSize20: normalize(20),
  fontSize22: normalize(22),

  borderRadius: wp("3%"),

  goBackIconSize: wp("8%"),
};
