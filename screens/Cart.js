import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import remove from "../assets/remove.png";
import { useDispatch, useSelector } from "react-redux";
import removeFormCart, { decrementQuantify, incrementQuantify } from "../slice/cartSlice";

const CartPage = () => {
  const dispatch =  useDispatch()
  const cartCount = useSelector((state) => state.notification.cartCount);
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  const handleIncrementQuantity = (item)=> {
    dispatch(incrementQuantify(item))
  }

  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantify(item))
  }

  return (
    <View
      style={{
        margin: 36,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {cartCount} Sản phẩm
      </Text>

      {cartItems.length > 0 ? (
        cartItems.map((value) => (
          <View
            key={value.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                backgroundColor: "#fff",
                borderRadius: 20,
              }}
            >
              <Image
                style={{
                  width: 83,
                  height: 83,
                  borderRadius: 20,
                }}
                source={{
                  uri: value.image,
                }}
              />
            </View>
            <View
              style={{
                gap: 11,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {value.name}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: "#C9AA05",
                  fontWeight: 700,
                }}
              >
                ${value.price}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                }}
              >
                <TouchableOpacity  onPress={() => handleDecrementQuantity(value)}>
                  <Image
                    source={minus}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
                    <Text>
                      {value.quantity}
                    </Text>
                <TouchableOpacity  onPress={() => handleIncrementQuantity(value)}>
                  <Image
                    source={add}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleRemove(value.id)} >
              <Image
                source={remove}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>Giỏ hàng trống</Text>
      )}

    
      <View
        style={{
          marginTop: 50,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#C9AA05",
            fontWeight: 700,
          }}
        >
          ${totalPrice}
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "#000",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              paddingVertical: 13,
              paddingHorizontal: 64,
              color: "#fff",
              fontWeight: 600,
              fontSize: 27,
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartPage;
