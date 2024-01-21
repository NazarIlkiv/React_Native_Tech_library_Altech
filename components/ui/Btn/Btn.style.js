import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants/theme";

const styles = StyleSheet.create({
  systemButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    width: "80%",
  },
  openLibBtnText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
});

export default styles;
