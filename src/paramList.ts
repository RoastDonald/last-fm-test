import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthparamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavProps<T extends keyof AuthparamList> = {
  navigation: StackNavigationProp<AuthparamList, T>;
  route: RouteProp<AuthparamList, T>;
};
