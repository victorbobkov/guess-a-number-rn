import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const StartGameScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Начать новую игру!</Text>
         <View style={styles.inputContainer}>
            <Text>Выбери число</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
               <Button
                  title='Сбросить'
                  onPress={() => {}}
               />
               <Button
                  title='Подтвердить'
                  onPress={() => {}}
               />
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start'
   },
   title: {
      fontSize: 20,
      marginVertical: 10,
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      // iOS
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      // Android
      elevation: 7,
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
   }
})

export default StartGameScreen