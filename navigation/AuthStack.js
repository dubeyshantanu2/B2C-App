import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>

        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        options={{ headerShown: false }}  
        />

        <Stack.Screen name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}  
        />
        
        <Stack.Screen name="Signup" 
        component={SignupScreen} 
        options={{ headerShown: false }}  
        />
        
    </Stack.Navigator>
);

export default AuthStack;