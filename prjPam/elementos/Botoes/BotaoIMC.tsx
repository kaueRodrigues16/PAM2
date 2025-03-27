import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";


export function IMCButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>texto</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "red",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 8,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',

    },
});


        
