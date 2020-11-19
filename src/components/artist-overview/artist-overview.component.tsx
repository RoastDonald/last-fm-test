import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import { HomeNavigationProps } from "../../types";
import api from "../../api";
import { Artist } from "../../api/interfaces/IArtistInfo";
import { styles } from "./artist-overview.styles";
import imageCap from "../../../assets/images/no-image.png";

export const ArtistOverview = ({ route }: HomeNavigationProps<"Song">) => {
  const { params } = route;
  const [isLoading, setLoading] = useState(true);
  const [artist, setArtist] = useState<Artist | null>(null);
  useEffect(() => {
    const getArtist = async () => {
      try {
        const artist = await api.getArtistInfo(params.artist.name);
        if (artist) {
          setArtist(artist);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getArtist();
  }, []);
  params;

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="black"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={imageCap} style={styles.headerImage} />
        <View style={styles.headerTags}>
          {artist?.tags.tag &&
            artist?.tags.tag.map((tag, idx) => (
              <Text key={tag.url} style={styles.headerTag}>
                {tag.name}
              </Text>
            ))}
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>{artist?.bio.content}</Text>
      </View>
    </ScrollView>
  );
};
