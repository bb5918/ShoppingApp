import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import BookMark from "./Sections/BookMark";
import Ranking from "./Sections/Ranking";

import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const initialLayout = { width: Dimensions.get("window").width };

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

function MallScreen() {
  const [isLoaded] = useFonts({
    BB: require("../../Assets/fonts/BB.ttf"),
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route }) => (
        <Text
          style={{
            color: "black",
            fontFamily: "BB",
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "랭킹" },
    { key: "second", title: "즐겨찾기" },
  ]);

  const renderScene = SceneMap({
    first: Ranking,
    second: BookMark,
  });
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
          <View
            style={{
              position: "absolute",
              right: 20,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <IconFeather style={{ marginRight: 10 }} name="hash" size={18} />
            <IconFeather style={{ marginRight: 10 }} name="search" size={18} />
            <IconFontAwesome name="shopping-bag" size={18} color="#A9D0F5" />
          </View>
          <Text
            style={{
              marginTop: 50,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "500",
              fontFamily: "BB",
            }}
          >
            쇼핑몰
          </Text>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </>
    );
  }
}

export default MallScreen;
