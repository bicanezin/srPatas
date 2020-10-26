import * as React from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Permissions from "expo-permissions";

import { saveUser, updateUser } from "../../store/modules/user/actions";
import { styles } from "./styles";

import LongText from "../../components/LongText";
import PetsCard from "../../components/PetsCard";
import ImagePicker from "../../components/ImagePicker";

export default function Profile({ navigation, route }) {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);

  const [image, setImage] = React.useState({ uri: null });
  const [hasCameraPermission, setCameraPermission] = React.useState(false);

  React.useEffect(() => {
    getPermissionsAsync();
  }, []);

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const isPermissionGranted = status === "granted";
    setCameraPermission(isPermissionGranted);
  };

  const teste = () => {
    // dispatch(saveUser("email@email.com", "Bianca Canezin"));
  };

  function callbackImage(image) {
    setImage(image);
    dispatch(updateUser(userRedux.email, userRedux.name, image.uri));
  }

  return (
    <View style={styles.container}>
      <View>
        {image === null || image.uri === null ? (
          <Image
            style={styles.image}
            source={require("../../../assets/images/gregs.png")}
          />
        ) : (
          <Image style={styles.image} source={{ uri: image.uri }} />
        )}
      </View>
      <Text style={styles.nameText} onPress={() => teste()}>
        {userRedux.name}
      </Text>
      <ImagePicker
        initialImage={image}
        onPress={(image) => setImage(image)}
        parentCallback={(image) => {
          callbackImage(image);
        }}
      />
      <Text>Meus Pets</Text>
      <PetsCard
        key={1}
        book={"aaaaaa"}
        session={"aaaaaaaaaaa"}
        deleteSession={() => {
          console.log("Delete")
        }}
        navigation={navigation}
      />
      {/* <PetsCard /> */}
      {/* <LongText
        label="Descrição"
        content="aaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaa"
      /> */}
    </View>
  );
}
