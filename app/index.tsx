import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";

import { COLORS, SIZES, FONT } from "../constants/theme";
import Welcome from "../components/home/Welcome";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <Welcome />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
