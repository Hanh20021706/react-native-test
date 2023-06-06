import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";

const categories = [
  {
    id: "1",
    title: "music open",
    image:
      "https://i.pinimg.com/564x/41/20/21/41202119d615827a30a17f3757fe1feb.jpg",
  },
  {
    id: "2",
    title: "game open",
    image:
      "https://i.pinimg.com/564x/c5/85/21/c58521acc54377f7be4a5a56154b0918.jpg",
  },
  {
    id: "3",
    title: "song open",
    image:
      "https://i.pinimg.com/564x/e9/65/49/e96549b7b647e0893d6d91e69930e09c.jpg",
  },
  {
    id: "4",
    title: "study open",
    image:
      "https://i.pinimg.com/564x/c6/4b/18/c64b1803f4ab00d0432e77b34fd7ab88.jpg",
  },
];

export default function Categories({navigation}) {
  return (
    <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              onPress={() => navigation.navigate('DetailCategory' , 
              {name : item.title , id : item.id}
              // tao bien de goi ten route
              ) 
            
            }
              categoryList={item}
              keyExtractor={(item) => `${item.id}`}
            />
          )}
        />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 20,
  },
  scrollView: {
    gap: 20,
  },
  
});
