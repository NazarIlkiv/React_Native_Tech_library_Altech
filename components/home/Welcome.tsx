import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.hello}>
          <Text style={styles.box}>.</Text>
          <Text style={styles.userName}>Вітаю інженере☺️</Text>
          <Text style={styles.welcomeMessage}>Що цікавить тебе сьогодні?</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
