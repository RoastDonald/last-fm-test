import React, { useState, useCallback } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import api from "../../api";
import debounce from "lodash.debounce";
import { Track as SearchTrack } from "../../api/interfaces/ISearchTracks";
import { styles } from "./search.styles";
import { SearchCard } from "../search-card/search-card.component";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<SearchTrack[] | null>(null);

  const debouncedSave = useCallback(
    debounce(async (searchInner: string) => {
      try {
        const data = await api.getTracks(searchInner);
        if (data) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1600),
    []
  );

  const handleChange = (text: string) => {
    setSearch(text);
    debouncedSave(search);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search your favorite artist"
        value={search}
        onChangeText={handleChange}
        style={styles.search}
      />
      <View style={styles.searchResultContainer}>
        {search.length > 1 && data ? (
          <FlatList
            style={styles.searchResultList}
            renderItem={({ item }) => <SearchCard item={item} />}
            keyExtractor={(item: SearchTrack) => item.url + item.mbid}
            data={data}
          />
        ) : null}
      </View>
    </View>
  );
};
