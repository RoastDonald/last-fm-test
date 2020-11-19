import React from "react";
import { View, Text } from "react-native";
import { Track as SearchTrack } from "../../api/interfaces/ISearchTracks";

type SearchCardProps = {
  item: SearchTrack;
};

export const SearchCard = ({ item }: SearchCardProps) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", color: "#161616" }}>{item.name}</Text>
      <Text>{item.artist}</Text>
    </View>
  );
};
