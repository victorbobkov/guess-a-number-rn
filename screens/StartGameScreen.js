import React, { useState } from 'react'
import {
   View,
   Text,
   Button,
   StyleSheet,
   TouchableWithoutFeedback,
   Keyboard,
   Alert
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = (props) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [confirmed, setConfirmed] = useState(false)
   const [selectedNumber, setSelectedNumber] = useState()

   const numberInputHandler = (inputText) => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''))
   }

   const resetInputHandler = () => {
      setEnteredValue('')
      setEnteredValue(false)
   }

   const confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredValue)
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
         Alert.alert(
            'Некорректное число!',
            'Выбери число от 1 до 99',
            [{text: 'Окей', style: 'destructive', onPress: resetInputHandler}])
         return
      }
      setConfirmed(true)
      setSelectedNumber(chosenNumber)
      setEnteredValue('')
   }

   let confirmedOutput

   if (confirmed) {
      confirmedOutput = <Text>Выбранное число: {selectedNumber}</Text>
   }

   return (
      <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss()
      }}>
         <View style={styles.screen}>
            <Text style={styles.title}>Начать новую игру!</Text>
            <Card style={styles.inputContainer}>
               <Text>Выбери число</Text>
               <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue}
               />
               <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                     <Button
                        title='Сбросить'
                        color={Colors.secondary}
                        onPress={resetInputHandler}
                     />
                  </View>
                  <View style={styles.button}>
                     <Button
                        title='Подтвердить'
                        color={Colors.primary}
                        onPress={confirmInputHandler}
                     />
                  </View>
               </View>
            </Card>
            {confirmedOutput}
         </View>
      </TouchableWithoutFeedback>
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
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 2,
   },
   button: {
      width: 120,
   },
   input: {
      width: 50,
      textAlign: 'center',
   }
})

export default StartGameScreen