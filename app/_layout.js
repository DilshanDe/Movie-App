import { Stack } from 'expo-router';
import "../global.css";
import { LogBox } from 'react-native';


export default function Layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack
    screenOptions={
      {
        headerShown:false
      }
    }
    >
      <Stack.Screen name='MovieScreen'options={{
        presentation:'fullScreenModal'
      }}/>
      </Stack>
  );
}