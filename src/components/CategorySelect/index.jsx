import { ScrollView } from 'react-native';
import { Category } from '@/components/Category';
import { categories } from '@/utils/categories';
import { styles } from './styles';

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        const checked = category.id === categorySelected;
        const dimmed = hasCheckBox ? !checked : !!categorySelected && !checked;

        return (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={checked}
            dimmed={dimmed}
            hasCheckBox={hasCheckBox}
            onPress={() => setCategory(category.id)}
          />
        );
      })}
    </ScrollView>
  );
}
