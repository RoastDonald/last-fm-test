import { StyleSheet } from "react-native";

export const makeStyle = (WIDTH: number, columns: number) =>
  StyleSheet.create({
    itemTop: {
      width: "100%",
      height: "60%",
      paddingHorizontal: 10,
      paddingVertical: 5,
      // margin: 10,
    },
    itemBottom: {
      width: "90%",
      flex: 1,
      marginHorizontal: 20,
    },
    itemBtn: {
      position: "absolute",
      right: 15,
      bottom: 10,
    },
    itemCta: {
      position: "relative",
      flex: 1,
      width: "100%",
      marginLeft: "auto",
      alignItems: "center",
    },
    item: {
      margin: 15,
      borderRadius: 20,
      height: WIDTH / columns + 25,
      flex: 1,
      shadowColor: "#2b0303",
      shadowOffset: {
        width: 0,
        height: 6,
      },

      shadowOpacity: 0.39,
      shadowRadius: 8.3,

      elevation: 13,
      // justifyContent: "center",
      // alignContent: "center",
      backgroundColor: "#292929",
    },
    itemName: {
      fontSize: 16,
      color: "#fff",
    },
    itemArtist: {
      color: "rgba(255,255,255,0.4)",
      fontWeight: "bold",
    },
  });
