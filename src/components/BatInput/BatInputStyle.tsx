import { StyleSheet } from "react-native";
import Theme from "../../styles/ThemeStyle";

export default StyleSheet.create({
    input: {
        borderRadius: 8,
        width: "100%",
        padding: 12,
        marginBottom: 16,
        backgroundColor: Theme.colors.darkGray,
        color: Theme.colors.inputText,
    },
});