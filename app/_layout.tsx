import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="tasks" 
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="notes"
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        options={{ headerShown: false}}
      />
    </Stack>
  );
}
