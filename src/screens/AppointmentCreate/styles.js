import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  categoryLabel: {
    marginLeft: 24,
    marginTop: 32,
    marginBottom: 12,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 31,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 29,
  },
  rightColumn: {
    marginRight: -1,
  },
  fieldLabel: {
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: 11,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  descriptionHeader: {
    marginTop: 26,
    marginBottom: 12,
  },
  footer: {
    marginTop: 56,
  },
});
