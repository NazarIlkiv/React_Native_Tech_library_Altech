import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerTitle: "" }} />
      <Tabs.Screen name="library" options={{ headerTitle: "" }} />
      <Tabs.Screen name="news" options={{ headerTitle: "" }} />
      <Tabs.Screen name="contact" options={{ headerTitle: "" }} />
    </Tabs>
  );
}
