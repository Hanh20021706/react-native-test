import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import search from "../../assets/search.png";
import CollectionListItem from "../components/CollectionListItem";
import PromotionsItem from "../components/PromotionsItem";
import Featured from "../components/Featured";
import Toast from "react-native-root-toast";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.homeHeader}>
            <Text style={styles.title}>Menu</Text>
            <Image
              style={styles.imageAvatar}
              source={{
                uri: "https://i.pinimg.com/736x/13/2d/81/132d81999361c68a1a91a161b5327cf9.jpg",
              }}
            />
          </View>
          <View style={styles.boxText}>
            <Image source={search} />
            <TextInput value="search" />
          </View>
          <CollectionListItem />
          <Button
            title="see all"
            onPress={() => {
              navigation.navigate("Categories", { name: "CATEGORY LIST" });
            }}
          />

          <PromotionsItem />
          <Featured />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 26,
    color: "#101010",
  },
  boxText: {
    borderWidth: 1,
    borderColor: "#462B9C",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 50,
    flexDirection: "row",
    gap: 20,
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
