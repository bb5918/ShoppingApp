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

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import DATA from "./sampleData";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity>
    <View style={{ flexDirection: "row", margin: 10 }}>
      <IconFontAwesome
        name="star-o"
        size={20}
        color="#A9D0F5"
        style={{ marginTop: 14, position: "absolute", right: 10 }}
      />
      <Text
        style={{
          fontFamily: "BB",
          fontSize: 15,
          color: "#BDBDBD",
          margin: 5,
          marginTop: 14,
        }}
      >
        {item.id}
      </Text>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          resizeMode: "stretch",
        }}
        source={item.image}
      />

      <Text
        style={{
          margin: 10,
          marginTop: 14,
          marginRight: 3,
          fontFamily: "BB",
          fontSize: 15,
        }}
      >
        {item.name}
      </Text>
      <IconFontAwesome
        style={{ marginTop: 14 }}
        name="shopping-bag"
        size={18}
        color="#A9D0F5"
      />
    </View>

    <View
      style={{
        height: 1,
        width: "90%",
        marginLeft: 10,
        backgroundColor: "#E6E6E6",
      }}
    />
  </TouchableOpacity>
);

const Ranking = ({ navigation }) => {
  const [isLoaded] = useFonts({
    BB: require("../../../Assets/fonts/BB.ttf"),
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

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            margin: 10,
            width: 24,
            height: 24,
            backgroundColor: "#E6E6E6",
            borderRadius: 12,
          }}
        >
          <IconFontAwesome
            name="filter"
            size={16}
            color="#6E6E6E"
            style={{ margin: 5 }}
          />
        </View>
        <Text
          style={{
            margin: 12,
            marginLeft: 0,
            fontFamily: "BB",
            fontSize: 15,
            color: "#D8D8D8",
          }}
        >
          스타일
        </Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default Ranking;
