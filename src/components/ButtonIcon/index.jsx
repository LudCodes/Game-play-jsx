import { Text, TouchableOpacity, View } from 'react-native';
import { DiscordIcon } from '@/assets/icons';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function ButtonIcon({ title, style, ...rest }) {
  return (
    <TouchableOpacity style={[globalStyles.button, styles.container, style]} activeOpacity={0.8} {...rest}>
      <View style={styles.iconWrapper}>
        <DiscordIcon width={24} height={18} />
      </View>

      <Text style={[globalStyles.buttonTitle, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}
