import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import DATA from "./sampleData";
import DATA2 from "./sampleData2";

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetail", { ...item })}
  >
    <Image
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10,

        resizeMode: "cover",
      }}
      source={item.image}
    />
  </TouchableOpacity>
);
const Item2 = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetail", { ...item })}
  >
    <Image
      style={{
        margin: 10,
        borderRadius: 10,
        width: "95%",
        height: 300,
        resizeMode: "cover",
      }}
      source={item.image}
    />
  </TouchableOpacity>
);

const CategoryScreen = ({ navigation }) => {
  const [isLoaded] = useFonts({
    BB: require("../../Assets/fonts/BB.ttf"),
  });
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        navigation={navigation}
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  const renderItem2 = ({ item }) => {
    return (
      <Item2
        navigation={navigation}
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View
          style={{
            height: 80,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              marginTop: 50,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "500",
              fontFamily: "BB",
            }}
          >
            모아보기
          </Text>

          <View style={{ marginTop: 50, marginLeft: 250 }}>
            <IconFontAwesome name="shopping-bag" size={24} color="#A9D0F5" />
          </View>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <View style={{ height: 100 }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal={true}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{ height: 5, width: "100%", backgroundColor: "#E6E6E6" }}
          />
          <Text style={{ margin: 10, fontFamily: "BB", fontSize: 15 }}>
            나의 픽
          </Text>
          <FlatList
            data={DATA2}
            renderItem={renderItem2}
            numColumns={1}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      </>
    );
  }
};

export default CategoryScreen;
