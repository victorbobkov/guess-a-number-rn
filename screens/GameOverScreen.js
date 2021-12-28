import React from 'react'
import { View, StyleSheet, Button, Image, Text } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'

const GameOverScreen = (props) => {
   let rounds
   if (props.roundsNumber === 1) {
      rounds = 'раунд'
   } else if (props.roundsNumber >= 2 && props.roundsNumber <= 4) {
      rounds = 'раунда'
   } else {
      rounds = 'раундов'
   }

   return (
      <View style={styles.screen}>
         <TitleText>Игра окончена!</TitleText>
         <View style={styles.imageContainer}>
            <Image
               fadeDuration={1000}
               source={require('../assets/success.png')}
               style={styles.image}
               resizeMode='cover'
            />
         </View>
         <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
               Компьютеру понадобилось{' '}
               <Text style={styles.highlight}>{props.roundsNumber}</Text> {rounds},
               чтобы отгадать число{' '}
               <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
         </View>


         <Button title='НОВАЯ ИГРА' onPress={props.onRestart} />
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: 30
   },
   image: {
      width: '100%',
      height: '100%',
   },
   highlight: {
      color: Colors.primary,
      fontFamily: 'open-sans-bold',
   },
   resultContainer: {
      width: '80%',
      marginVertical: 10
   },
   resultText: {
      textAlign: 'center',
      fontSize: 15
   },
})

export default GameOverScreen