import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput, Alert } from 'react-native'

export default function Todo({ todo, onRemove, getData }) {

    const [value, setValue] = useState('')
    const [editing, setEditing] = useState(false)

    function handleEdit(todo) {
        setValue(todo)
        setEditing(true)
    }

    function handleSave() {
        if (value !== '') {
            setEditing(false)
            getData(value, todo.id)
        }
    }
    return (
        <TouchableOpacity
            activeOpacity={0.4}
        >
            <View style={styles.todo}>
                {editing ?
                    <>
                        <TextInput
                            style={styles.saveInput}
                            onChangeText={setValue}
                            value={value}
                            placeholder={value === '' ? 'Input should not be empty!' : ''}
                        // placeholderTextColor="#ff0000"
                        />
                        <Button
                            title="Save"
                            color="#54f5aa"
                            onPress={handleSave}
                        />
                    </>
                    :
                    <>
                        <Text>{todo.title}</Text>
                        <View style={styles.panelButtons}>
                            <Button
                                title="Edit"
                                color="#54f5aa"
                                onPress={handleEdit.bind(null, todo.title)}
                            />
                            <Button
                                onPress={() => onRemove(todo.id)}
                                title="Delete"
                                color="#eb0000"
                            />
                        </View>
                    </>}

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
    panelButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 120,
        height: 25,
    },
    saveInput: {
        width: '80%',
        height: 20,
        color: '#ff0000',
        borderColor: 'red',
    }
})
