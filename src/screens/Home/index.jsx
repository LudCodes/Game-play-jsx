import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Appointment } from '@/components/Appointment';
import { Background } from '@/components/Background';
import { ButtonAdd } from '@/components/ButtonAdd';
import { CategorySelect } from '@/components/CategorySelect';
import { ListDivider } from '@/components/ListDivider';
import { ListHeader } from '@/components/ListHeader';
import { Profile } from '@/components/Profile';
import { appointments } from '@/data/mock';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  function handleCategorySelect(categoryId) {
    setCategory((current) => (current === categoryId ? '' : categoryId));
  }

  const filtered = category
    ? appointments.filter((item) => item.category === category)
    : appointments;

  return (
    <Background>
      <View style={[styles.header, { marginTop: insets.top + 12 }]}>
        <Profile />
        <ButtonAdd onPress={() => router.push('/schedule')} />
      </View>

      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

      <ListHeader title="Partidas agendadas" subtitle={`Total ${filtered.length}`} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() =>
              router.push({ pathname: '/details/[id]', params: { id: item.id } })
            }
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        contentContainerStyle={{ paddingBottom: insets.bottom + 69 }}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
