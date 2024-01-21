import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import React from "react";
import { Linking } from "react-native";

import styles from "../../../components/rehauSystems/rehauSystems.style";

import icons from "../../../constants/images";
import { COLORS } from "../../../constants/theme";
import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

const rehauSystems = () => {
  const router = useRouter();

  const {
    systemName,
    systemType,
    imgLink,
    constructionDept,
    chambers,
    glazingCapacity,
    drafts,
  } = useLocalSearchParams<{
    systemName: string;
    systemType: string;
    imgLink: string;
    constructionDept: string;
    chambers: string;
    glazingCapacity: string;
    drafts: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          title: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension="60%"
              handlePress={() => router.push("/library/")}
              iconUrl={icons.left}
            />
          ),
        }}
      />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          padding: 16,
        }}
      >
        <Text style={styles.systemTitle}>{systemName}</Text>
        <Text style={styles.systemType}>{systemType}</Text>
        <Image source={{ uri: imgLink }} style={styles.Img as ImageStyle} />
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresText}>
            Монтажна глибина: {constructionDept}
          </Text>
          <Text style={styles.featuresText}>К-сть камер: {chambers}</Text>
          <Text style={styles.featuresText}>Заповнення: {glazingCapacity}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(drafts);
          }}
          style={styles.openCatalogButton}
        >
          <Image
            source={icons.sketch}
            style={styles.openCatalogImg as ImageStyle}
          />
          <Text style={styles.openCatalogText}>Відкрити каталог</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default rehauSystems;
