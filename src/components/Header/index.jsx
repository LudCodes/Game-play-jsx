import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

export function Header({ title, action }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { secondary85, secondary40, heading, headerShadow } = theme.colors;

  return (
    <LinearGradient
      style={[styles.container, { paddingTop: insets.top + 16 }]}
      colors={[secondary85, secondary40]}
    >
      <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
        <Feather name="arrow-left" size={24} color={heading} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={styles.placeholder} />}

      <LinearGradient
        pointerEvents="none"
        style={styles.shadow}
        colors={[headerShadow, 'transparent']}
      />
    </LinearGradient>
  );
}
