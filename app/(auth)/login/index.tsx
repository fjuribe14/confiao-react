import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function LoginPage() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-black dark:text-white">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
