import { View, Text, Image, TouchableOpacity, ImageStyle } from "react-native";
import { useRouter } from "expo-router";

import styles from "./Welcome.style";

import images from "../../constants/images";

const Welcome = () => {
  const router = useRouter();

  const buttonsData = [
    {
      text: "Перейти до бібліотеки",
      imageSource: images.sketch,
      link: "/library",
    },
    { text: "Новинки від партнерів", imageSource: images.news, link: "/news" },
    { text: "Тех.підтримка", imageSource: images.chat, link: "/contact" },
  ];

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image source={images.logo} style={{ width: 300, height: 70 }} />
          <Text style={styles.userName}>Вітаю інженере☺️</Text>
          <Text style={styles.welcomeMessage}>Що цікавить тебе сьогодні?</Text>
        </View>
        {buttonsData.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push(item.link);
            }}
            key={index}
            style={styles.openLibBtn}
          >
            <Image
              source={item.imageSource}
              style={styles.openLibIcon as ImageStyle}
              resizeMode="contain"
            />
            <Text style={styles.openLibBtnText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Welcome;
