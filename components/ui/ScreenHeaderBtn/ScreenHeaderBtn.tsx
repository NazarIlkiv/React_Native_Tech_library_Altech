import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ImageStyle,
  GestureResponderEvent,
} from "react-native";

import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType; // Тип для зображення (наприклад, string або { uri: string })
  handlePress: any; // Тип для функції обробки події натискання
  dimension: string | ImageStyle; // Тип для числа або об'єкта ImageStyle
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  handlePress,
  dimension,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension) as ImageStyle}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
