import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";
import React from "react";

import { COLORS } from "../../../constants/theme";
import icons from "../../../constants/images";

import styles from "../../../components/news/news.style";

import newsData from "../../../api/news.json";

interface RouteParams {
  title: string;
  description: string;
  date: string;
  imgLink: string;
}

export default function index() {
  const router = useRouter();
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
              handlePress={() => router.push("/home")}
              iconUrl={icons.left}
            />
          ),
        }}
      />
      <Text style={styles.title}>Новини від партнерів</Text>
      {newsData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            router.push({
              pathname: "/news/newsItem/[id]",
              params: {
                title: item.title,
                description: item.description,
                date: item.date,
                imgLink: item.imgLink,
              } as RouteParams,
            });
          }}
        >
          <View style={styles.postContainer}>
            <View style={styles.postImgWrapper}>
              <Image source={{ uri: item.imgLink }} style={styles.postImage} />
            </View>
            <View style={styles.postTextWrapper}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postDate}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
