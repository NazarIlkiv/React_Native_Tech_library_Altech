import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/images";
import { COLORS, SIZES } from "../../constants/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          elevation: 0,
          backgroundColor: COLORS.lightWhite,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused
                    ? COLORS.lightGrey
                    : COLORS.lightWhite,
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.home : icons.home}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.lightGrey : "black",
                  }}
                />
                <Text
                  style={{
                    fontSize: SIZES.small,
                    color: focused ? COLORS.lightGrey : "black",
                  }}
                >
                  Головна
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused
                    ? COLORS.lightGrey
                    : COLORS.lightWhite,
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.sketch : icons.sketch}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.lightGrey : "black",
                  }}
                />
                <Text
                  style={{
                    fontSize: SIZES.small,
                    color: focused ? COLORS.lightGrey : "black",
                  }}
                >
                  Бібліотека
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused
                    ? COLORS.lightGrey
                    : COLORS.lightWhite,
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.news : icons.news}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.lightGrey : "black",
                  }}
                />
                <Text
                  style={{
                    fontSize: SIZES.small,
                    color: focused ? COLORS.lightGrey : "black",
                  }}
                >
                  Новини
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused
                    ? COLORS.lightGrey
                    : COLORS.lightWhite,
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.chat : icons.chat}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.lightGrey : "black",
                  }}
                />
                <Text
                  style={{
                    fontSize: SIZES.small,
                    color: focused ? COLORS.lightGrey : "black",
                  }}
                >
                  Підтримка
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
