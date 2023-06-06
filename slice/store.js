import  { configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import notificationReducer from './cartNotificationSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        notification : notificationReducer
    }
})

export default store