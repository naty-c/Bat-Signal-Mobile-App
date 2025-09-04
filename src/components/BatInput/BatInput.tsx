import React from "react";
import { TextInput, ViewStyle, TextInputProps } from "react-native";
import styles from "./BatInputStyle";

type BatInputProps = TextInputProps & {
  style?: ViewStyle;
};

export default function BatInput({ style, ...rest }: BatInputProps) {
  return <TextInput style={[styles.input, style]} {...rest} />;
}