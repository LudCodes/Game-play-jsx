import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { CategorySelect } from '@/components/CategorySelect';
import { GuildSelect } from '@/components/GuildSelect';
import { Header } from '@/components/Header';
import { SmallInput } from '@/components/SmallInput';
import { TextArea } from '@/components/TextArea';
import { selectedGuild } from '@/data/mock';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('1');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <Header title="Agendar partida" />

        <View style={styles.body}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: insets.bottom > 0 ? insets.bottom + 6 : 24 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={[globalStyles.title, styles.categoryLabel]}>Categoria</Text>

            <CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />

            <View style={styles.form}>
              <GuildSelect guild={selectedGuild} />

              <View style={styles.field}>
                <View>
                  <Text style={[globalStyles.title, styles.fieldLabel]}>Dia e mês</Text>
                  <View style={styles.row}>
                    <SmallInput />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput />
                  </View>
                </View>

                <View style={styles.rightColumn}>
                  <Text style={[globalStyles.title, styles.fieldLabel]}>Horário</Text>
                  <View style={styles.row}>
                    <SmallInput />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput />
                  </View>
                </View>
              </View>

              <View style={[styles.field, styles.descriptionHeader]}>
                <Text style={globalStyles.title}>Descrição</Text>
                <Text style={globalStyles.caption}>Max 100 caracteres</Text>
              </View>

              <TextArea maxLength={100} numberOfLines={5} autoCorrect={false} />

              <View style={styles.footer}>
                <Button title="Agendar" onPress={() => router.back()} />
              </View>
            </View>
          </ScrollView>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
}
