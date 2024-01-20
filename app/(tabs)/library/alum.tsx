import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

import icons from "../../../constants/images";

import { COLORS } from "../../../constants/theme";

const alum = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          title: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension="60%"
              handlePress={() => router.push("/library")}
              iconUrl={icons.left}
            />
          ),
        }}
      />

      <Text>aluminiumProfile</Text>
    </SafeAreaView>
  );
};

export default alum;
