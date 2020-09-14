import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

const FormRow = (props) => {
  const { children } = props;

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default FormRow;
