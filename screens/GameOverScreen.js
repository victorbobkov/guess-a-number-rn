import React from 'react'
import { View,
   StyleSheet,
   Image,
   Text,
   Dimensions,
   ScrollView
} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
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
      <ScrollView>
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
                  Смартфону понадобилось{' '}
                  <Text style={styles.highlight}>{props.roundsNumber}</Text> {rounds},
                  чтобы отгадать число{' '}
                  <Text style={styles.highlight}>{props.userNumber}</Text>
               </BodyText>
            </View>

            <MainButton onPress={props.onRestart}>
               НОВАЯ ИГРА
            </MainButton>
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      width: Dimensions.get('window').width * 0.7,
      height: Dimensions.get('window').width * 0.7,
      borderRadius: Dimensions.get('window').width * 0.7 / 2,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: Dimensions.get('window').height / 30
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
      marginHorizontal: 30,
      marginVertical: Dimensions.get('window').height / 60
   },
   resultText: {
      textAlign: 'center',
      fontSize: Dimensions.get('window').height < 400 ? 16 : 20
   },
})

export default GameOverScreen