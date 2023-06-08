import React from 'react'
import { View , Text , Button , Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { setCartCount, setNotification } from '../slice/cartNotificationSlice';
import Toast from 'react-native-root-toast';


const FeaturedItem = (props) => {
    const {productItem} = props 

    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(productItem));
      dispatch(setNotification("add to cart is success fully"));
      dispatch(setCartCount(1));
      Toast.show("add to cart is success fully")
    };
  
    return (
    <View
            style={{
              backgroundColor: "#EBE8E8",
              marginRight: 50,
              marginBottom: 20,
              paddingHorizontal: 16,
              paddingVertical: 25,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Image
              style={{
                width: 130,
                height: 100,
                borderRadius: 20,
              }}
              source={{
                uri: productItem.image,
              }}
            />
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {productItem.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#C9AA05",
                }}
              >
                ${productItem.price}
              </Text>

              <Button color="#0E803C" title="Add " onPress={handleAddToCart} />
            </View>
          </View>
  )
}

export default FeaturedItem
