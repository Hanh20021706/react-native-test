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
        addToCart: (state , action) => {
            const product = action.payload
            const existingProduct = state.products.find((item) => item.id === product.id)
            
            if(existingProduct){
                existingProduct.quantity += 1;
            }else{
                state.products.push({...product, quantity : 1})
            }

        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer