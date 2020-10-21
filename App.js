import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import MallScreen from "./src/Screens/MallScreen/MallScreen";
import CategoryScreen from "./src/Screens/CategoryScreen/CategoryScreen";
import LikeScreen from "./src/Screens/LikeScreen";
import MyPageScreen from "./src/Screens/MyPageScreen/MyPageScreen";

import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "로고", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const MallTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mall"
        component={MallScreen}
        options={{ title: "쇼핑몰", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CategoryTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ title: "모아보기", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const LikeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Like"
        component={LikeScreen}
        options={{ title: "찜한 아이템", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MyPageTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ title: "마이페이지", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="Home"
            component={HomeTab}
            options={{
              tabBarIcon: () => {
                return <IconFeather name="home" size={24} color="#819FF7" />;
              },
            }}
          />
          <BottomTab.Screen
            name="Mall"
            component={MallTab}
            options={{
              tabBarIcon: () => {
                return <IconEntypo name="shop" size={24} color="#819FF7" />;
              },
            }}
          />
          <BottomTab.Screen
            name="Category"
            component={CategoryTab}
            options={{
              tabBarIcon: () => {
                return <IconFeather name="list" size={24} color="#819FF7" />;
              },
            }}
          />
          <BottomTab.Screen
            name="Like"
            component={LikeTab}
            options={{
              tabBarIcon: () => {
                return <IconFeather name="heart" size={24} color="#819FF7" />;
              },
            }}
          />
          <BottomTab.Screen
            name="MyPage"
            component={MyPageTab}
            options={{
              tabBarIcon: () => {
                return <IconFeather name="user" size={24} color="#819FF7" />;
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
