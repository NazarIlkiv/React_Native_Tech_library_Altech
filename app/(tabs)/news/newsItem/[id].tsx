import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import React from "react";

import ScreenHeaderBtn from "../../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

import { COLORS } from "../../../../constants/theme";

import icons from "../../../../constants/images";

import styles from "../../../../components/newsItem/newsItem.style";

const newsItem = () => {
  const { title, description, date, imgLink } = useLocalSearchParams<{
    title: string;
    description: string;
    date: string;
    imgLink: string;
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
              handlePress={() => router.push("/news/")}
              iconUrl={icons.left}
            />
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Image source={{ uri: imgLink }} style={styles.Img} />
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default newsItem;
