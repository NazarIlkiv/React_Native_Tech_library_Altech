import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    paddingTop: 5,
    paddingBottom: 5,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    paddingTop: 5,
    paddingBottom: 5,
  },
  openLibBtn: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
  },
  openLibBtnText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
  openLibIcon: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
});

export default styles;
