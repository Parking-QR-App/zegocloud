import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigation from "./AppNavigation";
import { ZegoUIKitPrebuiltCallFloatingMinimizedView } from "@zegocloud/zego-uikit-prebuilt-call-rn";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigation />
            <ZegoUIKitPrebuiltCallFloatingMinimizedView />
        </NavigationContainer>
    );
}
