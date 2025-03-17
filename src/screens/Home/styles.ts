import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
    marginBottom: 20
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  form: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    height: 56,
    padding: 16
  },
  button: {
    alignItems: "center",
    backgroundColor: "#31CF67",
    borderRadius: 5,
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  listEmptyText: {
    color: "#6B6B6B",
    fontSize: 14,
    textAlign: "center"
  }
});