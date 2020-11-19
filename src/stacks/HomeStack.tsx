import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { connect } from "react-redux";
import { ArtistOverview } from "../components/artist-overview/artist-overview.component";
import Feed from "../components/feed/feed.component";
import { HomeParamList } from "../types";

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Song"
        options={({ route }) => ({
          headerTitle: route.params.artist.name,
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerTintColor: "white",
        })}
        component={ArtistOverview}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
