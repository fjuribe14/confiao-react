import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSession } from "../ctx";

export default function HomePage() {
  const { signOut } = useSession();

  return (
    <View className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-black gap-8">
      <Text className="text-black dark:text-white">HomePage</Text>
      <Pressable onPress={signOut}>
        <Text className="text-black dark:text-white">Sign Out</Text>
      </Pressable>
    </View>
  );
}
