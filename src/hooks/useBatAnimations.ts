import { useRef } from "react";
import { Animated } from "react-native";

export function useBatAnimations() {
    const fadeLogo = useRef(new Animated.Value(0)).current;
    const slideButton = useRef(new Animated.Value(50)).current;
    const fadeForm = useRef(new Animated.Value(0)).current;
    
    const runIntroAnimation = () => {
        fadeLogo.setValue(0);
        slideButton.setValue(50);
        Animated.sequence([
            Animated.timing(fadeLogo, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideButton, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const fadeOutIntro = (onComplete: () => void) => {
        Animated.timing(fadeLogo, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start(onComplete);
    };

  const fadeInForm = () => {
        Animated.timing(fadeForm, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    };

  const fadeOutForm = (onComplete: () => void) => {
        Animated.timing(fadeForm, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start(onComplete);
    };

    return {
        fadeLogo,
        slideButton,
        fadeForm,
        runIntroAnimation,
        fadeOutIntro,
        fadeInForm,
        fadeOutForm
    };


}
