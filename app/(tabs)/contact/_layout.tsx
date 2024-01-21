import { View, Text } from "react-native";
import { Stack } from "expo-router";

const StacklayoutLibrary = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default StacklayoutLibrary;
