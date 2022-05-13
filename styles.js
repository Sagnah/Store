import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#43a047"
    },

    containerDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#43a047",
    },

    containerBoxes: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        marginBottom: 10,
        fontSize: 40,
    },

    textDetails: {
        marginTop: 20, 
        alignItems: "center",
    },

    box: {
        width:220,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#4dd0e1',
        margin: 10,
        borderRadius: 16,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
        alignSelf: "flex-start",
        padding: 8,
    },
})