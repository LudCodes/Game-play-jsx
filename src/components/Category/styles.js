import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: 'center',
    marginRight: 8,
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    padding: 1,
  },
  background: {
    flex: 1,
    borderRadius: 7,
  },
  icon: {
    marginTop: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 16,
  },
  check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 2,
  },
  checked: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
});
