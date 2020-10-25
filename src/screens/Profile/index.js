import * as React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { saveUser } from "../../store/modules/user/actions";
import { styles } from "./styles";

import LongText from "../../components/LongText";

export default function Profile({ navigation, route }) {
  const dispatch = useDispatch();
  const aaaa = useSelector((state) => state.user);
  const teste = () => {
    dispatch(saveUser("email@email.com", "Bianca Canezin"));
  };
  return (
    <View style={styles.container}>
    {console.log(aaaa)}
      <Text onPress={() => teste()}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <LongText
        label="Descrição"
        content="aaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaa"
      />
    </View>
  );
}
