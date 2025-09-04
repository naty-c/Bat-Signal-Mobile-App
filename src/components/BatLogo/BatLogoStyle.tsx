import { StyleSheet } from "react-native";
import Theme from "../../styles/ThemeStyle";

export default StyleSheet.create({
    logoContainer: {
        backgroundColor: Theme.colors.white,
        borderRadius: 150,
        width: 220,
        height: 220,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 80,
    },
    logo: {
        width: 200,
        height: 200,
    },
});