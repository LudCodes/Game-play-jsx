import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

export function Category({
  title,
  icon: Icon,
  checked = false,
  dimmed = false,
  hasCheckBox = false,
  ...rest
}) {
  const { secondary40, secondary50, secondary70, secondary85, highlightBorder } = theme.colors;
  const opacity = dimmed ? 0.5 : 1;

  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={[styles.border, { opacity }]}
          colors={[checked ? highlightBorder : secondary50, secondary70]}
        >
          <LinearGradient style={styles.background} colors={[secondary85, secondary40]} />
        </LinearGradient>

        {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}

        <View style={[styles.icon, { opacity }]}>
          <Icon width={48} height={48} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
