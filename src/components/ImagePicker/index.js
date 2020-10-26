import React from "react";
import { View, Text, Alert } from "react-native";
import {
  launchImageLibraryAsync,
  launchCameraAsync,
  requestCameraPermissionsAsync,
  requestCameraRollPermissionsAsync,
  MediaTypeOptions,
} from "expo-image-picker";

import { styles } from "./styles";

export default function ImagePicker({ initialImage, onPress, parentCallback }) {
  const [image, setImage] = React.useState(initialImage);

  React.useEffect(() => {
    parentCallback(image);
  }, [image]);

  const onCameraPress = async () => {
    const cameraStatus = await requestCameraPermissionsAsync();
    if (cameraStatus.status !== "granted") {
      Alert.alert("Erro", "Necessária permissão para usar essa funcionalidade");
      return;
    }
    try {
      let result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [83, 106],
        quality: 0.6,
      });
      if (!result.cancelled) {
        setImage(result);
        onPress(result);
      } else {
        setImage(initialImage);
        onPress(initialImage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onImageLibraryPress = async () => {
    const rollStatus = await requestCameraRollPermissionsAsync();
    if (rollStatus.status !== "granted") {
      Alert.alert("Erro", "Necessária permissão para usar essa funcionalidade");
      return;
    }
    try {
      let result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [83, 106],
        quality: 0.6,
      });
      if (!result.cancelled) {
        setImage(result);
        onPress(result);
      } else {
        setImage(null);
        onPress(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text
        style={styles.alterImageText}
        onPress={() => {
          Alert.alert("Captura de imagem", "Da onde você quer pegar?", [
            {
              text: "Câmera",
              onPress: () => onCameraPress(),
            },
            {
              text: "Galeria",
              onPress: () => onImageLibraryPress(),
            },
          ]);
        }}
      >
        Alterar foto
      </Text>
    </View>
  );
}
