import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  caption: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  input: {
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  buttonTitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  },
});
