import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo!😊😊</Text>
      <Text style={styles.text}>Bienvenido a mi app!😊😊</Text>
      
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0000ff',
    maxHeight:112,
    maxWidth:112,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        
    }
})
export default HelloWord
