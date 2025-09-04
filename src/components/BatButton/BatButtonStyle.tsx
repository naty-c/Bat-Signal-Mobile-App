import { StyleSheet } from "react-native";
import Theme from "../../styles/ThemeStyle";

export default StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: Theme.colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },    
    text: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.medium,
        fontWeight: Theme.fontWeights.bold,
        textTransform: "uppercase"
    },
});