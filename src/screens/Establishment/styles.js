import { StyleSheet, Dimensions, PixelRatio } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

const { width, height } = Dimensions.get("window");
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    // justifyContent: "center",
  },
  textInputView: {
    // backgroundColor: colors.green1,
    borderColor: colors.purpleDarker,
    borderRadius: metrics.borderRadius,
    borderWidth: 2,
    width: wp(90),
    alignSelf: "center",
    marginTop: 15,
    // justifyContent: "space-around",
    // flex: 1,
  },
  separator: {
    marginVertical: wp(4),
    height: 1,
    width: "80%",
  },
  sectionContainer: {
    // backgroundColor: colors.pink,
    width: wp(90),
    alignSelf: "center",
  },
  servicesTitle: {
    color: colors.purpleDarker,
    fontSize: normalize(20),
    fontFamily: fontFamily.notoSans_bold,
  },
  serviceItemView: {
    backgroundColor: colors.purpleLight,
    width: wp(28),
    height: wp(30),
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginRight: wp(5),
  },
  serviceItemSelectedView: {
    backgroundColor: colors.purple,
    width: wp(28),
    height: wp(30),
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginRight: wp(5),
  },
  serviceText: {
    textAlign: "center",
    color: colors.purpleDarker,
    fontSize: normalize(15),
    fontFamily: fontFamily.notoSans_bold,
  },
  serviceSelectedText: {
    textAlign: "center",
    color: colors.white,
    fontSize: normalize(15),
    fontFamily: fontFamily.notoSans_bold,
  },
  petShopItemView: {
    paddingVertical: 5,
    // flexDirection: "row",
    flex: 1,
    backgroundColor: colors.white,
    width: wp(90),
    // height: wp(30),
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    // borderColor: colors.purple,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    // elevation: 5,
  },
  petShopItemImageView: {
    // backgroundColor: colors.blue,
    // flexDirection: "row",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: wp(90),
    alignItems: "center",
    // height: wp(30),
  },
  petShopName: {
    alignSelf: "flex-start",

    color: colors.purpleDarker,
    fontSize: metrics.fontSize20,
    fontFamily: fontFamily.notoSans_bold,
  },
  petShopInfos: {
    alignSelf: "flex-start",
    fontSize: normalize(11),
    fontFamily: fontFamily.notoSans_regular,
    color: colors.greyDark,
    marginVertical: 1,
  },
});
