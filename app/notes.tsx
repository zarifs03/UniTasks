import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterNavigation from "../components/FooterNavigation";
import { dashboardStyles } from "../styles/dashboardStyles";

export default function NotesScreen() {
  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.logo}>UniTasks</Text>
      </View>

      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.welcome}>Notes</Text>
        <Text style={dashboardStyles.todayText}>
          Your academic notes and resources
        </Text>

        <View style={dashboardStyles.content}>
          {/* Your notes content will go here */}
          <Text>Notes Content</Text>
        </View>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
