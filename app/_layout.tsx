import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { ProjectProvider } from '../context/ProjectContext';

export default function Layout() {
  useEffect(() => {
    // Set navigation bar style for Android
    if (Platform.OS === 'android') {
      SystemUI.setBackgroundColorAsync('#FFFFFF');
    }
  }, []);

  return (
    <ProjectProvider>
      <StatusBar 
        style="dark" 
      />
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
