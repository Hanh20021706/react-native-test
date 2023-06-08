import React, { useState } from "react";
import { View, Text, Button, TextInput ,  } from "react-native";
import { useDispatch } from "react-redux";
import { addProduct } from "../slice/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");


  const handleAddProduct = () => {
    if(productName.trim() !== ''){
        const newProduct = {
            name : productName
        };

        dispatch(addProduct(newProduct));
        setProductName('')
    }
  }

  return (
    <View>
      <TextInput
        placeholder="name product"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <Button
        title="Add Product" 
        onPress={handleAddProduct}
      />
    </View>
  );
};

export default ProductForm;
