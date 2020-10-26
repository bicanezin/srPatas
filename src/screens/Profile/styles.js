import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { normalize } from "../../styles/metrics";
import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: colors.white,
    flex: 1,
    // justifyContent: "center",
  },
  image: {
    borderColor: colors.purpleDarker,
    borderWidth: 1,
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(100) / 2,
    alignSelf: "center",
    resizeMode: "cover",
  },
  nameText: {
    alignSelf: "center",
    fontSize: metrics.fontSize20,
    fontFamily: fontFamily.notoSans_medium,
  },
});
