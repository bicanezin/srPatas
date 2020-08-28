import * as React from "react";
import { Text, View, Image } from "react-native";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button";
import TInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import { colors } from "../../styles";

export default function Register({ navigation }) {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);

  let houseGrey = require("../../../assets/images/house-grey.png");
  let catWall = require("../../../assets/images/cat_wall.png");
  let dog1Wall = require("../../../assets/images/dog1_wall.png");
  let dog2Wall = require("../../../assets/images/wall.png");
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.pink,
          flex: 0.3,
          justifyContent: "flex-end",
        }}
      >
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name={"ios-arrow-back"}
          size={21}
          color={colors.greyDarker}
        />
        <Text>Criar conta</Text>
      </View>

      <View
        style={{
          // backgroundColor: colors.blue,
          flex: 1,
        }}
      >
        <View
          style={{
            // backgroundColor: colors.green1,
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <TInput
            icon="ios-person"
            value={name}
            label="Nome completo"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setName}
            returnKeyType="next"
            autoCapitalize="words"
            errorBool={false}
            //   // error={!!name && _nameError()}
            //   // errorText={"Insira um nome completo"}
            // visible={nameError && _nameError()}
          />
          <TInput
            icon="ios-phone-portrait"
            value={name}
            label="Telefone"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setName}
            returnKeyType="next"
            autoCapitalize="words"
            errorBool={false}
            //   // error={!!name && _nameError()}
            //   // errorText={"Insira um nome completo"}
            // visible={nameError && _nameError()}
          />
          <TInput
            icon="ios-at"
            value={name}
            label="Email"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setName}
            returnKeyType="next"
            autoCapitalize="words"
            errorBool={false}
            //   // error={!!name && _nameError()}
            //   // errorText={"Insira um nome completo"}
            // visible={nameError && _nameError()}
          />

          <PasswordInput
            value={password}
            label="Confirmar senha"
            icon="lock-outline"
            placeholder="6 ou mais caractere"
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
            // onEndEditing={() => validateInfos()}
            // onSubmitEditing={() => validateInfos()}
            errorBool={false}
            // error={!!confirmPassword && _confirmPasswordError()}
            // visible={confirmPasswordError && _confirmPasswordError()}
            // errorText={"Senhas diferentes"}
          />

          <PasswordInput
            value={password}
            label="Senha"
            icon="lock-outline"
            placeholder="6 ou mais caractere"
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
            // onEndEditing={() => validateInfos()}
            // onSubmitEditing={() => validateInfos()}
            errorBool={false}
            // error={!!confirmPassword && _confirmPasswordError()}
            // visible={confirmPasswordError && _confirmPasswordError()}
            // errorText={"Senhas diferentes"}
          />
        </View>
      </View>

      <View
        style={{
          // backgroundColor: colors.wine,
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Button
          onPress={() => {
            navigation.push("Root");
          }}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
}
