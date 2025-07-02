import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  // today's date
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.logo}>UniTasks</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome back, Username!</Text>
        <Text style={styles.todayText}>{formattedDate}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 8 : 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: '#FAFAFA',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A00E0',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  todayText: {
    fontSize: 12,
    color: '#333',
  },
});