import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BannerImg from '@/assets/images/banner.png';
import { Background } from '@/components/Background';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { ListDivider } from '@/components/ListDivider';
import { ListHeader } from '@/components/ListHeader';
import { Member } from '@/components/Member';
import { appointments, members } from '@/data/mock';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

export function AppointmentDetails() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const appointment = appointments.find((item) => item.id === id) ?? appointments[0];
  const { owner } = appointment.guild;

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          owner && (
            <TouchableOpacity hitSlop={12}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{appointment.guild.name}</Text>
          <Text style={styles.subtitle}>{appointment.description}</Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle={`Total ${members.length}`}
        style={styles.listHeader}
      />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      {owner && (
        <View style={[styles.footer, { paddingBottom: insets.bottom > 0 ? insets.bottom + 6 : 24 }]}>
          <ButtonIcon title="Entrar na partida" />
        </View>
      )}
    </Background>
  );
}
