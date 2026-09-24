import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: theme.colors.secondary40,
  },
  centered: {
    marginLeft: 64,
    marginTop: 11,
    marginBottom: 12,
  },
  default: {
    marginLeft: 84,
    marginTop: 1,
    marginBottom: 31,
  },
});
