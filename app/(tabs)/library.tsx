import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import { COLORS, SIZES, FONT } from "../../constants/theme";

export default function library() {
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
