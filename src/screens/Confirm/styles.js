import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpleLight,
    flex: 1,
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: wp(4),
    height: 1,
    width: "80%",
  },
  sectionContainer: {
    alignItems: "center",
    // backgroundColor: colors.pink,
    width: wp(90),
    alignSelf: "center",
  },
  successTitle: {
    color: colors.purpleDarker,
    fontSize: metrics.fontSize22,
    fontFamily: fontFamily.notoSans_bold,
  },
  subText: {
    color: colors.purpleDarker,
    fontSize: metrics.fontSize15,
    fontFamily: fontFamily.notoSans_regular,
  },
});
