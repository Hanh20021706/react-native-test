import {createSlice} from '@reduxjs/toolkit'

// tạo slice 
const cartSlice = createSlice({
    // name của slice
    name: 'cart',
    /**
     * initial state là giá trị ban đầu bao gồm những gì 
     * ví dụ như : có thể là 1 mảng hoặc 1 trường của slice
     */
    initialState: {
        products : []
    },

    reducers: {
        // add to cart
        addToCart: (state , action) => {
            const product = action.payload
            const existingProduct = state.products.find((item) => item.id === product.id)
            
            if(existingProduct){
                existingProduct.quantity += 1;
            }else{
                state.products.push({...product, quantity : 1})
            }

        },
        // remove 
        removeFormCart: (state , action) => {
            // const removeFormCart = state.cart.filter((item) => item.id !== action.payload.id)
            // state.cart = removeFormCart;
            // const productId = action.payload;
            // state.cart = state.products.filter((item) => item.id !== productId)
        },

        //  increment 
        incrementQuantify : (state, action) => {
            const itemCart = state.products.find((item) => item.id === action.payload.id);
            itemCart.quantity++;
        }
    }
})

export const {addToCart , removeFormCart , incrementQuantify} = cartSlice.actions

export default cartSlice.reducer