import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const NotificationCart = () => {
  const products = useSelector((state) => state.cart.products)
  const cartCount = useSelector((state) => state.notification.cartCount);
  const cartTotal = products.reduce((total , product) =>  total + product.quantity , 0)
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "red",
        width: 40,
        height: 40,
        top: -10,
        right: -20,
        borderWidth: 2,
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {cartTotal}
      </Text>
    </View>
  );
};

export default NotificationCart;
