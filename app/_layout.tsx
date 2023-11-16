import COLORS from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, Pressable, Touchable, useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-semibold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          title: "Login or sign up",
          presentation: "modal",
          headerTitleStyle: { fontFamily: "Montserrat-semibold" },
          headerLeft:
            Platform.OS === "ios"
              ? () => (
                  <Pressable onPress={() => router.back()}>
                    <Ionicons
                      name="close-outline"
                      size={28}
                      color={COLORS.dark}
                    />
                  </Pressable>
                )
              : undefined,
        }}
      />
      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerLeft:
            Platform.OS === "ios"
              ? () => (
                  <Pressable onPress={() => router.back()}>
                    <Ionicons
                      name="close-outline"
                      size={28}
                      color={COLORS.dark}
                    />
                  </Pressable>
                )
              : undefined,
        }}
      />
      <Stack.Screen
        name="listing/[id]"
        options={{ presentation: "modal", headerTitle: "" }}
      />
    </Stack>
    // </ThemeProvider>
  );
}
