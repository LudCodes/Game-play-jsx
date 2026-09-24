import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CalendarIcon, PlayerIcon } from '@/assets/icons';
import { GuildIcon } from '@/components/GuildIcon';
import { theme } from '@/global/styles/theme';
import { categories } from '@/utils/categories';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function Appointment({ data, ...rest }) {
  const category = categories.find((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;
  const playerColor = owner ? primary : on;

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[secondary50, secondary70]}>
          <GuildIcon source={data.guild.image} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={globalStyles.title}>{data.guild.name}</Text>
            <Text style={[globalStyles.caption, styles.category]}>{category?.shortTitle}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.info}>
              <CalendarIcon />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.info}>
              <PlayerIcon color={playerColor} />
              <Text style={[styles.player, { color: playerColor }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
