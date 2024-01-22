import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    padding: 20,
  },
  title: {
    textAlign: "center",
    margin: 20,
    fontSize: 18,
    fontFamily: FONT.bold,
  },
  date: {
    textAlign: "center",
    fontSize: SIZES.medium,
    color: COLORS.lightGrey,
    marginBottom: 20,
  },
  Img: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    marginBottom: 100,
  },
});

export default styles;
