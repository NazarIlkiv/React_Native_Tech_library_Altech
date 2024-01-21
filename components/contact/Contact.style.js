import { A } from "@expo/html-elements";
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    marginBottom: 15,
  },
  infoContainer: {
    width: "80%",
    alignItems: "left",
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  contactFormContainer: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  sendButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
  },
  sendButtonText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
});

export default styles;
