import { Platform, StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
container: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  paddingTop: 8,
  paddingBottom: Platform.OS === 'android' ? 45 : 18,
  paddingHorizontal: 16,
  justifyContent: 'space-around',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: -2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 5,
},

  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});