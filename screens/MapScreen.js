import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>heres is the map screen</Text>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
