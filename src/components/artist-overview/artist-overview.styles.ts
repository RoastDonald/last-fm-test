import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
  },
  header: {
    maxHeight: 250,
    marginBottom: "25%",
    padding: 20,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerTags: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    display: "flex",
  },
  headerTag: {
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f5dea2",
    color: "#8c7a49",
    fontWeight: "bold",
  },
  bottom: {
    flex: 1,
    paddingHorizontal: 25,
  },
  bottomText: {
    color: "white",
    fontSize: 18,
    lineHeight: 35,
    // fontWeight: "bold",
  },
});
