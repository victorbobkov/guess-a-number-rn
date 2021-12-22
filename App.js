import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Угадай число' />
       <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
})
