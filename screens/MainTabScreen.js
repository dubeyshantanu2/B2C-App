import React from "react";
import {View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import CatagorieScreen from './CatagorieScreen';
import SearchScreen from "../screens/SearchScreen";
import ListScreen from './ListScreen';
import CartScreen from "../screens/CartScreen";

const HomeStack = createStackNavigator();
const CatagorieStack = createStackNavigator();
const ListStack = createStackNavigator();
const CartStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Catagorie"
        component={CatagorieStackScreen}
        options={{
          tabBarLabel: 'Catagorie',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-keypad" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStackScreen}
        options={{
          tabBarLabel: 'List',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
);

export default MainTabScreen;



const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator 
        screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
        title: 'B2CDock',
        headerLeft: () => (
            <View style={{marginLeft: 10}}>
            <Icon.Button 
                name="ios-menu" 
                size={30}
                color= "#333"
                backgroundColor="#fff"
                onPress={() => navigation.openDrawer()}
            />
            </View>
        ),
        headerRight: () => (
            <Icon.Button 
                name="ios-funnel" 
                size={30}
                color= "#333"
                backgroundColor="#fff"
                onPress={() =>{}}
            />
        )
        }}
        />
    </HomeStack.Navigator>
);

const CatagorieStackScreen = ({navigation}) => (
    <CatagorieStack.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <CatagorieStack.Screen
        name="Catagorie"
        component={CatagorieScreen}
        options={{ 
        title: 'Shop By Catagory',
        headerLeft: () => (
            <View style={{marginLeft: 10}}>
            <Icon.Button 
                name="ios-menu" 
                size={30}
                color= "#333"
                backgroundColor="#fff"
                onPress={() => navigation.openDrawer()}/>
        </View>
        ),
        }}
        />
    </CatagorieStack.Navigator>
);

const ListStackScreen = ({navigation}) => (
    <ListStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ListStack.Screen
        name="List"
        component={ListScreen}
        options={{ title: 'List', 
        headerLeft: () => (
            <View style={{marginLeft: 10}}>
            <Icon.Button 
                name="ios-menu" 
                size={30}
                color= "#333"
                backgroundColor="#fff"
                onPress={() => navigation.openDrawer()}/>
            </View>
            )
        }}
        />
    </ListStack.Navigator>
);

const CartStackScreen = ({navigation}) => (
    <CartStack.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ 
        title: 'Review Cart',
        headerLeft: () => (
            <View style={{marginLeft: 10}}>
            <Icon.Button 
                name="ios-menu" 
                size={30}
                color= "#333"
                backgroundColor="#fff"
                onPress={() => navigation.openDrawer()}/>
            </View>
        ),
        }}
        />
    </CartStack.Navigator>
);

