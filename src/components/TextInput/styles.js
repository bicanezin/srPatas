import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, metrics } from "../../styles";

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp("8%"), // right and left
  },
  container: {
    paddingVertical: 0, // top and bottom
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  TInput: {
    flex: 1,
    fontSize: metrics.fontSize13,
    color: colors.purpleDarker,
    backgroundColor: colors.transparent,
    // backgroundColor: 'pink',
    height: wp("12%"),
  },

  helperText: {
    marginTop: -5,
    marginLeft: -5,
    fontSize: metrics.fontSize13,
  },
});
