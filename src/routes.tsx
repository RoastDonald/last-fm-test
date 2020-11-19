import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppTabs } from "./AppTab";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

export const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </Provider>
  );
};
