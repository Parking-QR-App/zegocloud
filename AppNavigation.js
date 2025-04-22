import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import CallPage from "./screens/CallPage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="CallPage" component={CallPage} />
        </Stack.Navigator>
    );
}
