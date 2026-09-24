import { Image, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import IllustrationImg from '@/assets/images/illustration.png';
import { Background } from '@/components/Background';
import { ButtonIcon } from '@/components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const router = useRouter();

  function handleSignIn() {
    router.replace('/home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
