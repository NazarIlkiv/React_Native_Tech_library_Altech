import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";

import styles from "../../../components/ui/Btn/Btn.style";

import { COLORS } from "../../../constants/theme";
import icons from "../../../constants/images";

import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";

const rehauProfile = () => {
  const router = useRouter();

  const buttonsData = [
    {
      text: "Rehau Euro-Design 60",
      link: "/library/aluminiumProfile",
    },
    {
      text: "Rehau Euro-Design 70",
      link: "/library/rehauProfile",
    },
    {
      text: "Rehau Synego",
      link: "/library/rehauProfile",
    },
    {
      text: "Rehau Geneo",
      link: "/library/rehauProfile",
    },
  ];

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
      {buttonsData.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            router.push(item.link);
          }}
          key={index}
          style={styles.systemButton}
        >
          <Text style={styles.openLibBtnText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default rehauProfile;
