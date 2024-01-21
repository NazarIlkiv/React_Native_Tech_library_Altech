import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  systemTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  systemType: {
    fontSize: SIZES.medium,
    color: COLORS.lightGrey,
    marginBottom: 16,
  },
  Img: {
    width: 300,
    height: 300,
    marginBottom: 16,
    borderRadius: 20,
  },
  featuresContainer: {
    width: "100%",
    alignItems: "left",
  },
  featuresText: {
    fontFamily: FONT.medium,
    fontSize: 16,
    marginBottom: 10,
  },
  openCatalogButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    width: "90%",
  },
  openCatalogText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
  openCatalogImg: {
    height: 32,
    width: 32,
    marginRight: 10,
  },
});

export default styles;
