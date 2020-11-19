import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  search: {
    borderRadius: 20,
    width: "80%",
    height: 40,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: "#d1d1d1",
    color: "black",
  },
  searchResultContainer: {
    flex: 1,
    marginTop: 20,
  },
  searchResultList: {
    width: 340,
    marginBottom: 10,
    flexDirection: "column",
    padding: 25,
    backgroundColor: "rgba(245, 222, 162,0.4)",
    borderRadius: 20,
  },
});
