import { TextInput } from 'react-native';
import { theme } from '@/global/styles/theme';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function SmallInput({ style, ...rest }) {
  return (
    <TextInput
      style={[globalStyles.input, styles.container, style]}
      keyboardType="numeric"
      maxLength={2}
      placeholderTextColor={theme.colors.highlight}
      {...rest}
    />
  );
}
