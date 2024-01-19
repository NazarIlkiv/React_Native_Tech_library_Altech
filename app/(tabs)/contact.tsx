import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { COLORS, SIZES, FONT } from "../../constants/theme";

export default function contact() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Text>Hi</Text>
    </SafeAreaView>
  );
}
