import { Text, View } from 'react-native';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function ListHeader({ title, subtitle, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.caption}>{subtitle}</Text>
    </View>
  );
}
