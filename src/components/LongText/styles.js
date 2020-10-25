import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, metrics, fontFamily } from "../../styles";

export const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    paddingLeft: 5,
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    // flex: 1,
    textDecorationLine: "underline",
    paddingBottom: 6,
  },
  content: {
    // flex: 3,
  },
  collapsed: {
    maxHeight: 60,
  },
  expanded: {
    // flex: 1,
  },
});
