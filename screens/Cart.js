import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import remove from "../assets/remove.png";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartCount = useSelector((state) => state.notification.cartCount);
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = cartItems.reduce((total, product) => total + product.quantity * product.price , 0)
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
          <View key={value.id}
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
                <TouchableOpacity>
                  <Image
                    source={minus}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>

                <TextInput value="1" />
                <TouchableOpacity>
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
            <TouchableOpacity>
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

      {/* <View
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
              uri: "https://i.pinimg.com/564x/63/6a/2e/636a2e6afa3ef47a5e9912220022ed64.jpg",
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
            Pizza Fries
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#C9AA05",
              fontWeight: 700,
            }}
          >
            $32
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
            }}
          >
            <TouchableOpacity>
              <Image
                source={minus}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>

            <TextInput value="1" />
            <TouchableOpacity>
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
        <TouchableOpacity>
          <Image
            source={remove}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View> */}

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
