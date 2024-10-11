import "react-native-reanimated";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Slot } from "expo-router";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { SessionProvider } from "./ctx";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView
      className={cn([
        colorScheme === "dark" ? "dark" : "light",
        colorScheme === "dark" ? "bg-black" : "bg-white",
        "flex-1",
      ])}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </SafeAreaView>
  );
}
