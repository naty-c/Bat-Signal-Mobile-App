import { StyleSheet } from "react-native";
import Theme from "../../styles/ThemeStyle";

export default StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: Theme.colors.white,
        borderRadius: 8,

    },
    formHeader: {
        width: "100%",
        alignItems: "flex-start",
    },
    smallBatLogo: {
        width: 65,
        height: 65,
        resizeMode: "contain",
    },
    formTitle: {
        fontSize: Theme.fontSizes.title,
        fontWeight: Theme.fontWeights.regular,
        textAlign: "center",
        marginBottom: 10,
        color: Theme.colors.text
    },
    formField: {
        textAlign: "left",
        width: "100%",
    },
    label: {
        fontSize: Theme.fontSizes.small,
        marginBottom: 5,
    },
    sendBtn: {
        marginTop: 10,
        alignSelf: "stretch"
    },
    backText: {
        fontSize: Theme.fontSizes.medium,
        fontWeight: Theme.fontWeights.medium,
        textAlign: "center",
        marginVertical: 15,
        color: Theme.colors.primary
    }
});