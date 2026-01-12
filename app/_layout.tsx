import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs Group */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>

      {/* Movie Details Page*/}
      <Stack.Screen
        name="movie/[id]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
