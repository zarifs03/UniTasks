import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FooterNavigation from "../components/FooterNavigation";
import { dashboardStyles } from "../styles/dashboardStyles";

export default function UsersScreen() {
  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.logo}>UniTasks</Text>
      </View>

      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.welcome}>Team Members</Text>
        <Text style={dashboardStyles.todayText}>
          Collaborate with your team
        </Text>

        <View style={dashboardStyles.content}>
          {/* Your members content will go here */}
          <Text> Users Content</Text>
        </View>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
