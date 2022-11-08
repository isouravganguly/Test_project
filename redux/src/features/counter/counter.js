import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from "./counterSlice"

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    
return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={()=>dispatch(increment())}>
            <Text> Increment </Text>
        </TouchableOpacity>

        <Text>{count}</Text>

        <TouchableOpacity onPress={()=>dispatch(decrement())}>
            <Text> Decrement </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
    }
})