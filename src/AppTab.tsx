import { AntDesign } from "@expo/vector-icons";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeStack } from "./stacks/HomeStack";
import { SearchStack } from "./stacks/SearchStack";
import { TabsParamList } from "./types";

const Tabs = createBottomTabNavigator<TabsParamList>();

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search1";
          }
          return (
            <AntDesign name={iconName as string} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        },
        activeTintColor: "white",
        inactiveTintColor: "gray",

        style: {
          padding: 5,
          height: 60,
          backgroundColor: "#161616",
        },
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};
