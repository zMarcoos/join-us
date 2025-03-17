import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  name: {
    color: "#FFF",
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E23C44",
    borderRadius: 5,
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});