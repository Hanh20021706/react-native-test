import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import categories from "./screens/categories";
import detailCategory from "./screens/DetailCategory";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./screens/Setting";
import CartPage from "./screens/Cart";
import Products from "./screens/Products";
import { Provider, useSelector } from "react-redux";
import store, { persister } from "./slice/store";
import NotificationCart from "./components/NotificationCart";
import { PersistGate } from "redux-persist/integration/react";
// cart stack
const CartStack = createBottomTabNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartPage} />
    </CartStack.Navigator>
  );
}

// home navigation
const HomeStack = createNativeStackNavigator();

// home stack screen
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Categories"
        component={categories}
        options={({ route }) => ({ title: route.params.name })}
      />
      <HomeStack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.name })}
      />
      <HomeStack.Screen
        name="DetailCategory"
        component={detailCategory}
        options={({ route }) => ({ title: route.params.name })}
      />
    </HomeStack.Navigator>
  );
}

// tab navigation
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
    position: "absolute",
    margin: 20,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
  },
};

export default function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        top: 15,
                        gap: 5,
                      }}
                    >
                      <Image
                        source={require("./assets/home.png")}
                        name="Home"
                        style={{
                          tintColor: focused ? "#fff" : "#ccc",
                          width: 20,
                          height: 20,
                        }}
                      />
                      <Text style={{ fontSize: 20, color: "#fff" }}>Home</Text>
                    </View>
                  );
                },
              }}
            />

            <Tab.Screen
              name="Cart"
              component={CartStackScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        top: 15,
                        gap: 5,
                      }}
                    >
                      <Image
                        source={require("./assets/cart.png")}
                        name="Home"
                        style={{
                          tintColor: focused ? "#fff" : "#ccc",
                          width: 20,
                          height: 20,
                        }}
                      />
                      <Text style={{ fontSize: 20, color: "#fff" }}>Cart</Text>
                      <NotificationCart />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Setting"
              component={Setting}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        top: 15,
                        gap: 5,
                      }}
                    >
                      <Image
                        source={require("./assets/api.png")}
                        name="Home"
                        style={{
                          tintColor: focused ? "#fff" : "#ccc",
                          width: 20,
                          height: 20,
                        }}
                      />
                      <Text style={{ fontSize: 20, color: "#fff" }}>
                        Setting
                      </Text>
                    </View>
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 20,
    height: 20,
  },
  navPage: {
    backgroundColor: "#212F3D",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 20,
  },
  scrollView: {
    marginTop: 100,
    gap: 20,
  },
});
