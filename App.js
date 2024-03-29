import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Position from "./components/Position";

export default function App() {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Weather app!</Text>
            <Position />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
});
