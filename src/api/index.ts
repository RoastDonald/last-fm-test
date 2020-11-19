import axios, { AxiosResponse } from "axios";
import Constants from "expo-constants";
import Routes from "./routes";
import { TopTracksDTO, Track } from "./interfaces/ITopTracks";
import { ArtistInfoDTO, Artist as TopArtist } from "./interfaces/IArtistInfo";
import {
  ISearchTracksDTO,
  Track as SearchTrack,
} from "./interfaces/ISearchTracks";
const API_KEY = "a75ce12a5f2bc9bec23ee2753c165760";

export default {
  getTopTracks: async (): Promise<Track[] | void> => {
    try {
      const { data } = await axios.get<TopTracksDTO>(Routes.TOP_TRACKS, {
        params: {
          api_key: API_KEY,
          format: "json",
        },
      });
      return data.tracks.track;
    } catch (e) {
      console.log(e);
    }
  },
  getArtistInfo: async (artist: string): Promise<TopArtist | void> => {
    try {
      const { data } = await axios.get<ArtistInfoDTO>(Routes.ARTIST_INFO, {
        params: {
          api_key: API_KEY,
          format: "json",
          artist: artist,
        },
      });
      return data.artist;
    } catch (e) {
      console.log(e);
    }
  },
  getTracks: async (track: string): Promise<SearchTrack[] | void> => {
    try {
      const { data } = await axios.get<ISearchTracksDTO>(Routes.SEARCH_TRACKS, {
        params: {
          api_key: API_KEY,
          format: "json",
          track,
        },
      });
      return data.results.trackmatches.track;
    } catch (e) {
      console.log(e);
    }
  },
};
