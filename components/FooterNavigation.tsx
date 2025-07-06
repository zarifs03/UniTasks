import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { footerStyles } from "../styles/footerStyles";

const FooterNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "home" as const, route: "/" },
    { id: "tasks", label: "Tasks", icon: "list" as const, route: "/tasks" },
    {
      id: "notes",
      label: "Notes",
      icon: "document-text" as const,
      route: "/notes",
    },
    {
      id: "profile",
      label: "Profile",
      icon: "people" as const,
      route: "/profile",
    },
  ];

  const handleTabPress = (route: string) => {
    router.push(route as any);
  };

  const isActiveTab = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname === route;
  };

  return (
    <View style={footerStyles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={footerStyles.tab}
          onPress={() => handleTabPress(tab.route)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={isActiveTab(tab.route) ? "#4A00E0" : "#9CA3AF"}
          />
          <Text
            style={[
              footerStyles.tabLabel,
              { color: isActiveTab(tab.route) ? "#4A00E0" : "#9CA3AF" },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FooterNavigation;
