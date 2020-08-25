import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    //marginVertical: hp('1%'),
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    height: hp("6%"),
    width: wp("40%"),
    backgroundColor: colors.greyLight,
    borderRadius: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: wp("4.5%"),
    color: colors.white,
    textAlign: "center",
    // fontFamily: 'GothamRounded-Bold',
    // backgroundColor: 'pink'
  },
});
