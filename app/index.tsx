import { SafeAreaView } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function StartPage() {
  return (
    <SafeAreaView>
      <Redirect href="/home" />
    </SafeAreaView>
  );
}
