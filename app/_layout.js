import { Stack } from 'expo-router';
import "../global.css";
import { LogBox } from 'react-native';

export default function Layout() {
  // Ignore specific warning logs
  LogBox.ignoreLogs(["Warning: Failed prop type"]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MovieScreen"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}

