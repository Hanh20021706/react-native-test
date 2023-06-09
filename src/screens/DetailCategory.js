import {View , Text , FlatList , StyleSheet} from 'react-native'
import ProductListItem from '../components/ProductListItem';


const ProductList =[
    {
        id: '1',
        name : 'Product A',
        image : 'https://i.pinimg.com/564x/7e/b3/3e/7eb33e8263b359ab6f8c8ee0e89c6904.jpg',
        price : 25000
    },
    {
        id: '2',
        name : 'Product B',
        image : 'https://i.pinimg.com/564x/13/ff/3e/13ff3e57be52bfa6f2ce5afc7cd84ad5.jpg',
        price : 35000
    },
]

export default function DetailCategory ({route, navigation}) {
    const { id} = route.params;
    
    return (
        <View>
            <Text>
                DetailCategory
            </Text>
            <FlatList style={style.productList}
            data={ProductList}
            numColumns={2}
                renderItem={({item}) => (
                    <ProductListItem
                        product= {item}
                        keyExtractor= {(item) => `${item.id}`}
                    />
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
   
})