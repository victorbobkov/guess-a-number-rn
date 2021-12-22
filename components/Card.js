import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
   return (
      <View style={{...styles.card, ...props.style}}>
         {props.children}
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
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
   }
})

export default Card