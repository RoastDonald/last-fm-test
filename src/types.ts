import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Track } from "./api/interfaces/ITopTracks";

export type TabsParamList = {
  Home: undefined;
  Search: undefined;
};

export type HomeParamList = {
  Feed: undefined;
  Song: Track;
};

export type HomeNavigationProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
