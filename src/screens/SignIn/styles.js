import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 407,
    marginTop: 100,
  },
  content: {
    width: '100%',
    marginTop: -111,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 15,
    fontFamily: theme.fonts.title700,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 48,
    fontFamily: theme.fonts.text400,
  },
});
