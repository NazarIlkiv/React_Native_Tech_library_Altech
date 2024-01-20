import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";

import styles from "../../../components/ui/Btn/Btn.style";

import { COLORS } from "../../../constants/theme";
import icons from "../../../constants/images";

import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

import rehauData from "../../../api/rehau.json";

const rehau = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        alignItems: "center",
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
      {rehauData.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/library/rehauSystems",
              params: {
                systemName: item.name,
                systemType: item.type,
                imgLink: item.imgLink,
                wProfile: item.widthProfile,
                wGlazing: item.widthGlazing,
              },
            });
          }}
          key={index}
          style={styles.systemButton}
        >
          <Text style={styles.openLibBtnText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default rehau;
