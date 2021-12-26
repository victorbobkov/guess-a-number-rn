import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>Игра окончена!</Text>
         <Text>Количество раундов: {props.roundsNumber}</Text>
         <Text>Загаданное число: {props.userNumber}</Text>
         <Button title='НОВАЯ ИГРА' onPress={props.onRestart} />
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default GameOverScreen