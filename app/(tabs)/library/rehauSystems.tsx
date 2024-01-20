import { SafeAreaView, Text, Image } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import React from "react";

import icons from "../../../constants/images";
import { COLORS } from "../../../constants/theme";
import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

const rehauSystems = () => {
  const router = useRouter();
  const { systemName, systemType, imgLink, wProfile, wGlazing } =
    useLocalSearchParams<{
      systemName: string;
      systemType: string;
      imgLink: string;
      wProfile: string;
      wGlazing: string;
    }>();

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
              handlePress={() => router.push("/library/rehau")}
              iconUrl={icons.left}
            />
          ),
        }}
      />
      <Text>{systemName}</Text>
      <Text>{systemType}</Text>
      <Image source={{ uri: imgLink }} style={{ width: 300, height: 300 }} />
      <Text>{wProfile}</Text>
      <Text>{wGlazing}</Text>
    </SafeAreaView>
  );
};

export default rehauSystems;
