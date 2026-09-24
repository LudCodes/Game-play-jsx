import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  shadow: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    height: 22,
    opacity: 0.6,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
  placeholder: {
    width: 24,
  },
});
