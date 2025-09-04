import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import styles from "./BatButtonStyle";

type BatButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function BatButton({ title, onPress, style }: BatButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
