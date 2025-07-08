import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { ProjectProvider } from '../context/ProjectContext';

export default function Layout() {
  useEffect(() => {
    // Set navigation bar style for Android
    if (Platform.OS === 'android') {
      // Set navigation bar to use dark content (dark buttons) using expo-navigation-bar
      NavigationBar.setButtonStyleAsync('dark');
      
      console.log('Navigation bar set to use dark buttons');
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
