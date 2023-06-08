import React from "react";
import { View, Text, Button, Image } from "react-native";
const PromotionsItem = () => {
  return (
    <View>
      <Text style={{
        fontSize: 24,
        marginTop: 13
      }}>Promotions</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#9577F2',
        borderRadius: 20,
        alignItems: "center",
        marginTop: 20
      }}>
        <View style={{
            gap: 10,
        }}>
          <Text style={{
            color: '#fff', 
            fontSize: 16
          }}>Today’s Offer</Text>
          <Text style={{
            color: '#fff', 
            fontSize: 20,
            fontWeight: "600"
          }}>Free box of Fries</Text>
          <Text style={{
            color: '#fff', 
            fontSize: 16
          }}>on all orders above $150</Text>
        </View>
        <Image 
        style={{
            width: 100,
            height: 100,
            borderRadius: 20
        }}
        source={{uri : 'https://i.pinimg.com/564x/bb/2e/78/bb2e78c877cc5b83f81f1620cccf1d1b.jpg'}} />
      </View>
    </View>
  );
};

export default PromotionsItem;
