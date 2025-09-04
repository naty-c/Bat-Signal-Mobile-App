import React from "react";
import { View, Image } from "react-native";
import styles from "./BatLogoStyle";

export default function BatLogo() {
  return (
    <View style={styles.logoContainer}>
    <Image
      source={require("../../assets/batman-bat-logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
    </View>
  );
}