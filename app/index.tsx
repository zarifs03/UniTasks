import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterNavigation from "../components/FooterNavigation";
import { dashboardStyles } from "../styles/dashboardStyles";

export default function DashboardScreen() {
  // today's date
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.logo}>UniTasks</Text>
      </View>

      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.welcome}>Welcome back, User!</Text>
        <Text style={dashboardStyles.todayText}>{formattedDate}</Text>

        <View style={dashboardStyles.content}>
          {/* Your dashboard content will go here */}
          <Text>Dashboard Content</Text>
        </View>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
