import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    //marginVertical: hp('1%'),
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    height: hp("6%"),
    width: wp("80%"),
    backgroundColor: colors.purpleDarker,
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: metrics.fontSize16,
    color: colors.white,
    textAlign: "center",
    fontFamily: fontFamily.notoSans_medium,
    // fontFamily: 'GothamRounded-Bold',
    // backgroundColor: 'pink'
  },
});
