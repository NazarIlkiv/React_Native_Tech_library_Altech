import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import styles from "../../../components/home/Welcome.style";

import { COLORS } from "../../../constants/theme";

const index = () => {
  const router = useRouter();

  const buttonsData = [
    {
      text: "Алюмінієві системи",
      link: "/library/aluminiumProfile",
    },
    {
      text: "ПВХ системи Rehau",
      link: "/library/rehauProfile",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {buttonsData.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            router.push(item.link);
          }}
          key={index}
          style={styles.openLibBtn}
        >
          <Text style={styles.openLibBtnText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default index;
