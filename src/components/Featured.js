import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { setCartCount, setNotification } from "../slice/cartNotificationSlice";
import FeaturedItem from "./FeaturedItem";

const featured = [
  {
    id: "1",
    name: "Beef Burger",
    price: "55",
    image:
      "https://i.pinimg.com/564x/0f/d0/48/0fd048180d536b2f900d78299fa595b4.jpg",
  },
  {
    id: "2",
    name: "Beef Burger",
    price: "55",
    image:
      "https://i.pinimg.com/564x/ff/6e/7e/ff6e7e9e6a56dfe0a13b8287988851b1.jpg",
  },
  {
    id: "3",
    name: " Burger",
    price: "55",
    image:
      "https://i.pinimg.com/736x/3e/10/ec/3e10eca2939d0fade5639714001af2d9.jpg",
  },
];

const Featured = (navigation) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(featured));
    dispatch(setNotification("add to cart is success fully"));
    dispatch(setCartCount(1));
  };

  return (
    <View>
      <Text
        style={{
          marginVertical: 20,
          fontSize: 24,
        }}
      > 
        Popular
      </Text>

      <FlatList
        data={featured}
        numColumns={2}
        renderItem={({ item }) => <FeaturedItem productItem={item} />}
      />
    </View>
  );
};

export default Featured;
