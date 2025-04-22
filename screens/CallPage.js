import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import {
    ZegoUIKitPrebuiltCall,
    ONE_ON_ONE_VOICE_CALL_CONFIG,
    ZegoMenuBarButtonName,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";
import KeyCenter from "../config/keyCenter";

export default function CallPage({ route, navigation }) {
    const prebuiltRef = useRef();
    const { userID, userName } = route.params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                ref={prebuiltRef}
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                callID="voice_call_room" // ✅ Unique Room ID

                config={{
                    ...ONE_ON_ONE_VOICE_CALL_CONFIG, // ✅ Voice Call Only
                    topMenuBarConfig: {
                        buttons: [ZegoMenuBarButtonName.minimizingButton],
                    },
                    onCallEnd: () => {
                        navigation.navigate("HomePage");
                    },
                    onWindowMinimized: () => {
                        navigation.navigate("HomePage");
                    },
                    onWindowMaximized: () => {
                        navigation.navigate("CallPage", { userID, userName });
                    },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
