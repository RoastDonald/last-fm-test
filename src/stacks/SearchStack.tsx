import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Search } from "../components/search/search.component";

const Stack = createStackNavigator();

export const SearchStack = () => (
  <View style={styles.container}>
    <Search />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    paddingTop: 60,
  },
});
