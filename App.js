import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, FlatList } from 'react-native'
import AddTodo from './src/AddTodo'
import Navbar from './src/Navbar'
import Todo from './src/Todo'

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ],
        )
    }

    function handleData(data, id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, title: data } : todo))
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View>
            <Navbar />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <FlatList
                    keyExtractor={item => item.id}
                    data={todos}
                    renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} getData={handleData} />)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
})
