import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    maxWidth: 290,
    marginTop: 12,
    fontSize: 13,
    lineHeight: 21,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  listHeader: {
    marginTop: 24,
  },
  members: {
    marginLeft: 24,
    marginTop: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});
