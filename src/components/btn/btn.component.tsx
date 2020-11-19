import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "./btn.styles";
import { Linking } from "react-native";

type CardBtnProps = {
  title: string;
  style: Object;
  link: string;
};

export const CardBtn = ({ title, style, link }: CardBtnProps) => (
  <TouchableOpacity
    onPress={() => Linking.openURL(link)}
    style={[styles.btnContainer, style]}
  >
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);
