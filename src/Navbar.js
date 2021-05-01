import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                Todo App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#53f5d2',
        paddingBottom: 10,
    },
    text: {
        color: '#000',
        fontSize: 18,
    }
})