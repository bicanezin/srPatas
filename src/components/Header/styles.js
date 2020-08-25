import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    flexDirection: "row",
    position: "absolute",
    height: hp("9%"),
    width: wp("100%"),
    backgroundColor: colors.white,
    elevation: 0,
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "space-between",
    padding: wp("2%"),
    marginBottom: hp("3%"),
  },

  buttonText: {
    fontSize: wp("5%"),
    // color: colors.black,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    // fontFamily: 'GothamRounded-Bold',
    flex: 2,
  },
});
