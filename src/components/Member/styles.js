import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    marginTop: -2,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  },
});
