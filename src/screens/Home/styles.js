import { StyleSheet, Dimensions, PixelRatio } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors } from "../../styles";

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
    borderRadius: 20,
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
  servicesTitle: {
    color: colors.purpleDarker,
    fontSize: normalize(20),
    marginLeft: wp(5),
    fontFamily: "notoSans-bold",
  },
  serviceItemView: {
    backgroundColor: colors.purpleLight,
    width: wp(28),
    height: wp(30),
    marginBottom: wp(4),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginLeft: wp(5),
  },
  serviceText: {
    textAlign: "center",
    color: colors.purpleDarker,
    fontSize: normalize(15),
    fontFamily: "notoSans-bold",
  },
  petShopItemView: {
    // flexDirection: "row",
    flex: 1,
    backgroundColor: colors.white,
    width: wp(90),
    // height: wp(30),
    marginBottom: wp(4),
    borderRadius: 20,
    borderColor: colors.purple,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginLeft: wp(5),
  },
  petShopText: {
    textAlign: "left",
    color: colors.purpleDarker,
    fontSize: normalize(15),
    fontFamily: "notoSans-bold",
  },
});
