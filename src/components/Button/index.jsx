import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function Button({ title, style, ...rest }) {
  return (
    <TouchableOpacity style={[globalStyles.button, styles.container, style]} activeOpacity={0.8} {...rest}>
      <Text style={globalStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
