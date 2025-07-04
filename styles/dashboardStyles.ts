import { Platform, StatusBar, StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#1F2937',
  },
  todayText: {
    fontSize: 12,
    color: '#6B7280',
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
});