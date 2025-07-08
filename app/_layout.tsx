import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ProjectProvider } from '../context/ProjectContext';

export default function Layout() {
  useEffect(() => {
    const setNavBar = async () => {
      await NavigationBar.setVisibilityAsync('visible');
      await NavigationBar.setButtonStyleAsync('dark');
    };
    setNavBar();
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