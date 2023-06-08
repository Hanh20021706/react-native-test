import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name : 'notification',
    initialState: {
        message : '',
        cartCount : 0
    },
    reducers:{
        setNotification: (state , action) => {
            state.message = action.payload
        },
        setCartCount : (state , action) => {
            state.cartCount = action.payload
        }
    }
    
})

export const {setCartCount , setNotification} = notificationSlice.actions

export default notificationSlice.reducer