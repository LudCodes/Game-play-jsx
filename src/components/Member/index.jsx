import { Text, View } from 'react-native';
import { Avatar } from '@/components/Avatar';
import { theme } from '@/global/styles/theme';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function Member({ data }) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} />

      <View>
        <Text style={[globalStyles.title, styles.title]}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? theme.colors.on : theme.colors.primary },
            ]}
          />
          <Text style={globalStyles.caption}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}
