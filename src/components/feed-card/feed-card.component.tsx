import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Text, View } from "react-native";
import imageCap from "../../../assets/images/no-image.png";
import { Track } from "../../api/interfaces/ITopTracks";
import { HomeParamList } from "../../types";
import { CardBtn } from "../btn/btn.component";
import { makeStyle } from "./feed-card.styles";

type CardProps = {
  columns: number;
  width: number;
  item: Track;
  navigation: StackNavigationProp<HomeParamList, "Feed">;
};

export const Card = ({ width, columns, item, navigation }: CardProps) => {
  const styles = makeStyle(width, columns);
  const handleTransStack = () => {
    navigation.navigate("Song", { ...item });
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemTop}>
        <Image
          source={imageCap}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            opacity: 0.6,
          }}
        />
      </View>
      <View style={styles.itemBottom}>
        <Text style={styles.itemName}>
          {item.name.length > 15
            ? item.name.slice(0, 15).concat("...")
            : item.name}
        </Text>

        <Text style={styles.itemArtist} onPress={handleTransStack}>
          {item.artist.name}
        </Text>
      </View>
      <View style={styles.itemCta}>
        <CardBtn
          style={styles.itemBtn}
          title="artist page"
          link={item.artist.url}
        />
      </View>
    </View>
  );
};
