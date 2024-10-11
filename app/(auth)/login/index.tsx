import { router } from "expo-router";
import { useSession } from "@/app/ctx";
import { View, Text } from "react-native";

export default function LoginPage() {
  const { signIn } = useSession();

  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-black dark:text-white"
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}>
        Sign In
      </Text>
    </View>
  );
}
