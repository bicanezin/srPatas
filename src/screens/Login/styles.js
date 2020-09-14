import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpleLight,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  errorText: {
    marginHorizontal: wp("10%"),
    color: colors.red,
    marginTop: 5,
    fontFamily: fontFamily.notoSans_medium,
    fontSize: metrics.fontSize11
  }
});
