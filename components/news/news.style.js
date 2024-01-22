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
  postContainer: {
    width: "90%",
    flexDirection: "row",
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: "grey",
    borderStyle: "solid",
    padding: 10,
    margin: 10,
  },
  postTextWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  postImgWrapper: {},
  postTitle: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  postDate: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    borderRadius: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});

export default styles;
