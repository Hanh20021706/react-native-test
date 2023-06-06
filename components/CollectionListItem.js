import React from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";

const collections = [
  {
    id: "1",
    name: "Pizza",
    image:
      "https://i.pinimg.com/564x/fc/78/78/fc78786df8d6b6e89a505bc24a530630.jpg",
  },
  {
    id: "2",
    name: "Burger",
    image:
      "https://i.pinimg.com/564x/61/c6/9a/61c69a28c9e233dd6ea28fe404faa43c.jpg",
  },
  {
    id: "3",
    name: "Pizza",
    image:
      "https://i.pinimg.com/564x/ad/11/3d/ad113d2f8e8ba578e457b2d7ec97aca4.jpg",
  },
  {
    id: "4",
    name: "Dessert",
    image:
      "https://i.pinimg.com/564x/35/1f/8f/351f8f407160f52e646be6797ae13ccf.jpg",
  },
];

const CollectionListItem = () => {
  return (
    <View style={styles.listCollection}>
      <FlatList
        data={collections}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.collectionItem}>
            <View style={styles.collectionBoxImage}>
              <Image
                style={styles.collectionImage}
                source={{
                  uri: item.image,
                }}
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default CollectionListItem;

const styles = StyleSheet.create({
  listCollection: {
    marginTop: 50,
  },
  collectionItem: {
    alignItems: "center",
    gap: 10,
    marginRight: 15
  },
  collectionBoxImage: {
    backgroundColor: "#462B9C",
    padding: 5,
    borderRadius: 10,
  },
  collectionImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
});
