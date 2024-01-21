import { Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";

import styles from "../../../components/ui/Btn/Btn.style";

import { COLORS } from "../../../constants/theme";
import icons from "../../../constants/images";

import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

import rehauData from "../../../api/rehau.json";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
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
              handlePress={() => router.push("/library/")}
              iconUrl={icons.left}
            />
          ),
        }}
      />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {rehauData.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/library/rehauSystems",
                params: {
                  systemName: item.nameSystem,
                  systemType: item.type,
                  imgLink: item.imgLink,
                  constructionDept: item.constructionDept,
                  chambers: item.chambers,
                  glazingCapacity: item.glazingCapacity,
                  drafts: item.drafts,
                },
              });
            }}
            key={index}
            style={styles.systemButton}
          >
            <Text style={styles.openLibBtnText}>{item.nameSystem}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
