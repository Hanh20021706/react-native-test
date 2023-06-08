import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
const ProductListItem = (props) => {
  const { product } = props;
  return (
    <View style={style.productItem}>
      <Image style={style.productImage} source={{ uri: product.image }} />
      <View style={style.productBody }>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductListItem;

const style = StyleSheet.create({
  productItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    gap: 10
  },
  productBody:{
    flexDirection: 'row',
    justifyContent: "space-between",
    flex: 1,
    width: '100%'
  },
  productImage: {
    width: 150,
    height : 150,
  },
});
