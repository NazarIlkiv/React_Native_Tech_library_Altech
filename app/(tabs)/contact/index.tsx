import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";
import { COLORS } from "../../../constants/theme";
import icons from "../../../constants/images";

import styles from "../../../components/contact/contact.style";

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

      <Text style={styles.title}>Контакти</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Номер телефону:</Text>
        <Text style={styles.text}>+380963629939</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Розробник програми:</Text>
        <Text style={styles.text}>Назар Ільків</Text>
      </View>
      <View style={styles.contactFormContainer}>
        <Text style={styles.questionText}>Маєте запитання?</Text>
        <TextInput value="" style={styles.input} placeholder="Ваше запитання" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Надіслати</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
