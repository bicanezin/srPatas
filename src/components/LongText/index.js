import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { styles } from "./styles";

const LongText = (props) => {
  const { label = "", content = "-" } = props;

  const [isExpanded, setExpanded] = React.useState(false);

  const changeIsExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <View style={styles.line}>
      <Text style={[styles.cell, styles.label]}>{label}</Text>

      <TouchableWithoutFeedback onPress={() => changeIsExpanded()}>
        <View>
          <Text
            style={[
              styles.cell,
              styles.content,
              isExpanded ? styles.expanded : styles.collapsed,
            ]}
          >
            {content}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LongText;
