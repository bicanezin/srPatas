import * as React from "react";
import { Text, View, Image } from "react-native";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";

import Button from "../../components/Button";
import TInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import { colors, fontFamily, metrics } from "../../styles";

export default function Login({ navigation }) {
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
          // backgroundColor: colors.pink,
          flex: 1,
          // flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={dog2Wall}
          style={{ flex: 1, width: "100%", height: 40 }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          // backgroundColor: colors.blue,
          flex: 1.2,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.notoSans_bold,
            fontSize: metrics.fontSize22,
            marginLeft: 30,
          }}
        >
          Login
        </Text>
        <View
          style={{
            // backgroundColor: colors.green1,
            justifyContent: "space-around",
            flex: 1,
          }}
        >
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
            navigation.navigate("Root");
          }}
        >
          Login
        </Button>
        <Text
          style={{
            marginTop: 10,
            fontFamily: fontFamily.notoSans_regular,
            fontSize: metrics.fontSize15,
            color: colors.purpleDarker,
          }}
        >
          OU
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: fontFamily.notoSans_regular,
            fontSize: metrics.fontSize15,
            color: colors.purpleDarker,
          }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Cadastre-se
        </Text>
      </View>
    </View>
  );
}
