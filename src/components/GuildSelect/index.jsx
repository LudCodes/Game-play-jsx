import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '@/components/GuildIcon';
import { theme } from '@/global/styles/theme';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function GuildSelect({ guild, ...rest }) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View style={styles.container}>
        {guild ? (
          <View style={styles.image}>
            <GuildIcon source={guild.image} />
          </View>
        ) : (
          <View style={styles.emptyImage} />
        )}

        {guild ? (
          <View style={styles.selectedBody}>
            <Text style={globalStyles.title}>{guild.name}</Text>
            <Text style={[globalStyles.caption, styles.subtitle]}>{guild.game}</Text>
          </View>
        ) : (
          <View style={styles.body}>
            <Text style={globalStyles.title}>Selecione um servidor</Text>
          </View>
        )}

        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
      </View>
    </TouchableOpacity>
  );
}
