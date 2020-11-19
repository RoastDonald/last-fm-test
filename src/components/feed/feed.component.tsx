import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getTopTracks } from "../../redux/feed/feed.actions";
import { RootState } from "../../redux/root-reducer";
import { Card } from "../feed-card/feed-card.component";
import { styles } from "./feed.styles";

const COLUMNS = 2;
const WIDTH = Dimensions.get("window").width;

type FeedProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const Feed = ({ navigation, tracks, isLoading }: FeedProps) => {
  useEffect(() => {
    getTopTracks();
  }, []);
  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="black"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              item={item}
              width={WIDTH}
              columns={COLUMNS}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, idx) => item.url + item.duration}
          data={tracks}
        />
      </View>
    );
  }
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AnyAction>
): any => ({
  getTopTracks: dispatch(getTopTracks()),
});

const mapStateToProps = (state: RootState) => ({
  tracks: state.feed.tracks,
  isLoading: state.feed.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
