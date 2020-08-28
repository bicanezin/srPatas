import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, metrics } from "../../styles";

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp("8%"), // right and left
  },
  formView: {
    paddingVertical: 0, // top and bottom
    // height: hp("10%"),

    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: metrics.fontSize13,
    color: colors.purpleDarker,
    backgroundColor: colors.transparent,
    // backgroundColor: 'pink',
    height: wp("12%"),
  },
  iconView: {
    position: "absolute",
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
    fontSize: metrics.fontSize13,
  },
});
