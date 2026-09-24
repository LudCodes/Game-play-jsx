import { View } from 'react-native';
import { styles } from './styles';

export function ListDivider({ isCentered = false }) {
  return <View style={[styles.container, isCentered ? styles.centered : styles.default]} />;
}
