import * as React from "react";
import { Text, View, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import firebase from '../../database/firebaseDb';
import FormRow from '../../components/FormRow';
import Button from "../../components/Button";
import TInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import { colors, fontFamily, metrics } from "../../styles";

export default function Register({ navigation }) {
  const [name, setName] = React.useState("");
  // const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  function validate() {
    let errors = {};
    if (!name)
      errors.name = 'Insira seu nome';

    // if (!phoneNumber)
    //   errors.phoneNumber = "Insira um número de telefone"
    // else if (phoneNumber.length !== 9)
    //   errors.phoneNumber = "Insira um número de telefone válido"

    if (!email)
      errors.email = 'Insira um endereço de email';
    else if (!/\S+@\S+\.\S+/.test(email))
      errors.email = 'Insira um email válido';

    if (!password)
      errors.password = 'Insira uma senha';
    else if (password.length < 6)
      errors.password = 'Insira uma senha com 6 ou mais caracteres';

      if (!confirmPassword)
      errors.confirmPassword = 'Insira a senha novamente'
    else if (confirmPassword !== password)
      errors.confirmPassword = "Insira senhas iguais"
    return errors;
  };

  const registerUser = () => {
    setIsLoading(true);
    setErrors({});

    const checkErrors = validate();
    checkErrors.email !== undefined
      && checkErrors.password !== undefined
      ? (setErrors(checkErrors), setIsLoading(false))
      : firebase
        .auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res.user)
          console.log('User registered successfully!');

          storeToken(JSON.stringify(res.user));
          setEmail('');
          setPassword('');
          setIsLoading(false);

        }).then(() => {
          navigation.navigate("Root");
        })
        .catch(error => {
          let errors = {};
          errors.firebaseCreateUser = error.message;
          setErrors(errors);
          
          console.log(error.message);
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

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View
        style={{
          // backgroundColor: colors.pink,
          marginTop: 15,
          flex: 0.4,
          justifyContent: "flex-end",
        }}
      >
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name={"ios-arrow-back"}
          size={33}
          color={colors.greyDarker}
          style={{ marginLeft: 15 }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontFamily: fontFamily.notoSans_bold,
            fontSize: metrics.fontSize22,
          }}
        >
          Crie sua conta
        </Text>
      </View>
      <Text style={styles.errorText}>{errors.firebaseCreateUser}</Text>

      <View
        style={{
          // backgroundColor: colors.blue,
          paddingVertical: 20,
          // flex: 1.2,
        }}
      >
        <FormRow>
          <TInput
            icon="ios-person"
            value={name}
            label="Nome completo"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setName}
            returnKeyType="next"
            autoCapitalize="words"
          />
          <Text style={styles.errorText}>{errors.name}</Text>

          {/* <TInput
            icon="ios-phone-portrait"
            value={phoneNumber}
            label="Telefone"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setPhoneNumber}
            returnKeyType="next"
            autoCapitalize="words"
          />
          <Text style={styles.errorText}>{errors.phoneNumber}</Text> */}

          <TInput
            icon="ios-at"
            value={email}
            label="Email"
            placeholder="ex: exemplo@gmail.com"
            onChangeText={setEmail}
            returnKeyType="next"
            autoCapitalize="words"
          />
          <Text style={styles.errorText}>{errors.email}</Text>

          <PasswordInput
            value={password}
            label="Senha"
            icon="lock-outline"
            placeholder="6 ou mais caractere"
            returnKeyType="send"
            onChangeText={(value) => setPassword(value)}
          />
          <Text style={styles.errorText}>{errors.password}</Text>

          <PasswordInput
            value={confirmPassword}
            label="Confirmar senha"
            icon="lock-outline"
            placeholder="6 ou mais caractere"
            returnKeyType="send"
            onChangeText={(value) => setConfirmPassword(value)}
          />
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        </FormRow>
      </View>

      <View
        style={{
          // backgroundColor: colors.wine,
          // flex: 0.5,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {isLoading ? <ActivityIndicator size="large" color={colors.pink} /> : (
          <Button
            onPress={() => {
              registerUser();
            }}
          >
            Cadastrar
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
