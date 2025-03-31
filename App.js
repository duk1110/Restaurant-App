import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

const AppContext = createContext();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
                tabBarIcon: ({ color }) => <Ionicons name="compass-outline" size={24} color={color} />
            }} 
        />
        <Tab.Screen 
            name="Account" 
            component={ProfileScreen} 
            options={{ 
                tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} /> 
            }} 
        />
    </Tab.Navigator>
);

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <NavigationContainer>
                {isLoggedIn ? (
                    <MainTabScreen />
                ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

export { AppContext };
