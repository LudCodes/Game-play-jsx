import { Image, View } from 'react-native';
import { DiscordIcon } from '@/assets/icons';
import { styles } from './styles';

export function GuildIcon({ source }) {
  return (
    <View style={styles.container}>
      {source ? (
        <Image source={source} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordIcon width={40} height={40} />
      )}
    </View>
  );
}
