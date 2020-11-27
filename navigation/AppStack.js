import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import HomeScreen from '../screens/HomeScreen';
//import BarcodeScreen from '../screen/BarcodeScreeen';
import CatagorieScreen from '../screens/CatagorieScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/ListScreen';
import SupportScreen from '../screens/SupportScreen';
import MainTabScreen from "../screens/MainTabScreen";
import BarcodeScreen from "../screens/BarcodeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";

import { DrawerContent } from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="CatagorieScreen" component={CatagorieScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="ListScreen" component={ListScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="BarcodeScreen" component={BarcodeScreen} />
            <Drawer.Screen name="SearchScreen" component={SearchScreen} />
            <Drawer.Screen name="CartScreen" component={CartScreen} />

        </Drawer.Navigator>
    )
    
    }

export default AppStack;
