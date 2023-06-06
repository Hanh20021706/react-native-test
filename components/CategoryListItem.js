import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CategoryListItem = (props) => {
  const { categoryList, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={style.container}>
        <Text style={style.title}>{categoryList.id}</Text>
        <Text style={style.title}>{categoryList.title}</Text>
        <Image
          source={{ uri: categoryList.image }}
          style={style.categoryImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: "#212F3D",
    borderWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    color: "#212F3D",
    fontSize: 20,
    textTransform: "uppercase",
    marginBottom: 10,
    fontWeight: 500,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
