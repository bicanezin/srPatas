// @refresh reset

import * as React from "react";
import { Text, View, Image, ActivityIndicator, YellowBox } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from "./styles";
import firebase from '../../database/firebaseDb';
import Button from "../../components/Button";
import TInput from "../../components/TextInput";
import FormRow from '../../components/FormRow';
import PasswordInput from "../../components/PasswordInput";
import { colors, fontFamily, metrics } from "../../styles";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  let dogsWall = require("../../../assets/images/wall.png");
  YellowBox.ignoreWarnings(['Setting a timer']);
  React.useEffect(() => {
    // getToken();
  }, [])

  function validate() {
    let errors = {};
    if (!email) {
      errors.email = 'Insira um endereço de email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Insira um email válido';
    }
    if (!password) {
      errors.password = 'Insira uma senha';
    } else if (password.length < 6) {
      errors.password = 'Insira uma senha com 6 ou mais caracteres';
    }
    return errors;
  };

  const registerUser = () => {
    setIsLoading(true);

    const checkErrors = validate();
    checkErrors.email !== undefined
      && checkErrors.password !== undefined
      ? (setErrors(checkErrors), setIsLoading(false))
      : firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res.user)
          console.log('User registered successfully!');

          storeToken(JSON.stringify(res.user));
          setEmail('');
          setPassword('');

        }).then(() => {
          navigation.navigate("Root");
          setIsLoading(false);
          setErrors({});
        })
        .catch(error => {
          let errors = {};

          errors.firebaseLogin = error.message;
          setErrors(errors);
          console.log(error.message, "sdfghjkl");
          setIsLoading(false)
        })
  }

  const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  const getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

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
          source={dogsWall}
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
        <Text style={styles.errorText}>{errors.firebaseLogin}</Text>

        <FormRow>
          <TInput
            icon="ios-at"
            value={email}
            label="Email"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={(value) => setEmail(value)}
            returnKeyType="next"
            autoCapitalize="words"
          />
          <Text style={styles.errorText}>{errors.email}</Text>
        </FormRow>

        <FormRow>
          <PasswordInput
            value={password}
            label="Senha"
            icon="lock-outline"
            placeholder="6 ou mais caractere"
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
          />
          <Text style={styles.errorText}>{errors.password}</Text>
        </FormRow>
      </View>

      <View
        style={{
          // backgroundColor: colors.wine,
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {isLoading ? <ActivityIndicator size="large" color={colors.pink} /> : (
          <>
            <Button
              onPress={() => {
                registerUser();
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
          </>
        )}
      </View>
    </View>
  );
}
