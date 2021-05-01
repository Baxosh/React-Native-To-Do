import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'

export default function AddTodo({ onSubmit }) {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('it shouldn\'t be empty')
        }

    }

    return (
        <TouchableOpacity activeOpacity={0.4} >
            <View style={styles.block}>
                <TextInput style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    placeholder="Write something"
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoCorrect={true}
                />
                <Button style={styles.button} title="Add Todo" onPress={pressHandler} />
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        padding: 5,
        fontSize: 18,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3948ab',
    },
    button: {
        fontSize: 15,
    }
})