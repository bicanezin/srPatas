import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import TInput from "../../components/TextInput";
import Rating from "../../components/Rating";

import { styles } from "./styles";
import { colors } from "../../styles";
import { normalize } from "../../components/TextInput/styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function Home() {
  const [services, SetServices] = React.useState([
    {
      id: 1,
      title: "Banho",
    },
    {
      id: 2,
      title: "Banho seco",
    },
    {
      id: 3,
      title: "Tosa higiênica",
    },
    {
      id: 4,
      title: "Corte",
    },
    {
      id: 5,
      title: "Tosa verão",
    },
    // {
    //   id: 6,
    //   title: "Banho e corte de unhas",
    // },
  ]);
  const [petShop, setPetShop] = React.useState([
    {
      id: 1,
      name: "Pet shop quatro patas",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 5,
    },
    {
      id: 2,
      name: "Republica pet",
      address: "Avenida Adhemar Pereira de Barros, 100",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 0,
    },
    {
      id: 3,
      name: "Pet shop amicão",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 2,
    },
    {
      id: 4,
      name: "",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 3,
    },
    {
      id: 5,
      name: "",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 1,
    },
  ]);
  const [search, setSearch] = React.useState("");
  const [arrays, setArrays] = React.useState([]);
  const size = 2;
  while (services.length > 0) arrays.push(services.splice(0, size));

  const renderServices = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity style={styles.serviceItemView}>
          <Ionicons name="ios-cut" size={26} color={colors.greyLight} />
          <Text style={styles.serviceText}>{item[0].title}</Text>
        </TouchableOpacity>

        {item.length > 1 ? (
          <TouchableOpacity style={styles.serviceItemView}>
            <Ionicons name="ios-cut" size={24} color={colors.greyLight} />
            <Text style={styles.serviceText}>{item[1].title}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const renderItem = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity style={styles.petShopItemView}>
          <View
            style={{
              // backgroundColor: colors.blue,
              flexDirection: "row",
              flex: 1,
              width: wp(90),
              alignItems: "center",
              // height: wp(30),
            }}
          >
            <Image
              source={require("../../../assets/images/dog_shower.jpg")}
              style={{
                width: wp(40),
                height: wp(50),
                flex: 1,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
            <View
              style={{
                // backgroundColor: colors.green,
                flex: 1,
                alignItems: "flex-start",
              }}
            >
              <Text style={styles.petShopText}>{item.name}</Text>
              <Text>{item.address}</Text>
              <Text>{item.city}</Text>
              <Text>{item.openTime}</Text>
              <Rating rate={item.rating}></Rating>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  const keyExtractor = React.useCallback((item, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.textInputView}>
              <TInput
                icon="ios-search"
                value={search}
                label="O que você está procurando?"
                placeholder="Tosa"
                onChangeText={setSearch}
                returnKeyType="next"
                autoCapitalize="words"
                errorBool={false}
                //   // error={!!name && _nameError()}
                //   // errorText={"Insira um nome completo"}
                // visible={nameError && _nameError()}
              />
            </View>

            <View style={styles.separator} />
          </>
        }
        data={arrays}
        keyExtractor={keyExtractor}
        // horizontal={true}
        renderItem={({ item, index }) => {}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        ListFooterComponent={
          <>
            <Text style={styles.servicesTitle}>Serviços</Text>
            <FlatList
              data={arrays}
              keyExtractor={keyExtractor}
              horizontal={true}
              renderItem={({ item, index }) => renderServices(item)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              getItemLayout={getItemLayout}
            />
            <View style={styles.separator} />
            <Text style={styles.servicesTitle}>Pet shops</Text>
            <FlatList
              data={petShop}
              keyExtractor={keyExtractor}
              renderItem={({ item, index }) => renderItem(item)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              getItemLayout={getItemLayout}
            />
          </>
        }
      />
    </View>
  );
}
