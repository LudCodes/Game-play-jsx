import { TextInput } from 'react-native';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function TextArea({ style, ...rest }) {
  return <TextInput style={[globalStyles.input, styles.container, style]} multiline {...rest} />;
}
