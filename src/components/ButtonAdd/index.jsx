import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

export function ButtonAdd(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
