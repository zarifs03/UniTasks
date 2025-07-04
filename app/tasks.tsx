import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterNavigation from "../components/FooterNavigation";
import { dashboardStyles } from "../styles/dashboardStyles";

export default function TasksScreen() {
  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.logo}>UniTasks</Text>
      </View>

      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.welcome}>Tasks</Text>
        <Text style={dashboardStyles.todayText}>
          Manage your academic tasks
        </Text>

        <View style={dashboardStyles.content}>
          {/* Your tasks content will go here */}
          <Text>Tasks Content</Text>
        </View>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
