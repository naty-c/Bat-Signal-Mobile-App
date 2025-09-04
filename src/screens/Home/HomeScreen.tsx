import React, { useState, useEffect } from "react";
import { View, StatusBar, Animated } from "react-native";
import BatLogo from "../../components/BatLogo/BatLogo";
import BatButton from "../../components/BatButton/BatButton";
import FormScreen from "../../screens/Form/FormScreen";
import { useBatAnimations } from "../../hooks/useBatAnimations";
import styles from "./HomeScreenStyle";

export default function HomeScreen() {
    const [showForm, setShowForm] = useState(false);
    const {
        fadeLogo,
        slideButton,
        fadeForm,
        runIntroAnimation,
        fadeOutIntro,
        fadeInForm,
        fadeOutForm,
    } = useBatAnimations();

    useEffect(() => {
        if (!showForm) runIntroAnimation();
    }, [showForm]);

    const handleActivate = () => {
        fadeOutIntro(() => {
            setShowForm(true);
            fadeInForm();
        });
    };

    const handleBack = () => {
        fadeOutForm(() => setShowForm(false));
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {!showForm ? (
                <>
                    <Animated.View style={{ opacity: fadeLogo }}>
                        <BatLogo />
                    </Animated.View>

                    <Animated.View style={{ transform: [{ translateY: slideButton }] }}>
                        <BatButton title="Call Batman" onPress={handleActivate} />
                    </Animated.View>
                </>
            ) : (
                <Animated.View style={{ opacity: fadeForm }}>
                    <FormScreen onBack={handleBack} />
                </Animated.View>
            )}
        </View>
    );
}