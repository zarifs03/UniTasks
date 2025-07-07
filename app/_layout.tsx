import { Stack } from 'expo-router';
import { ProjectProvider } from '../context/ProjectContext';

export default function Layout() {
  return (
    <ProjectProvider>
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
    </ProjectProvider>
  );
}
