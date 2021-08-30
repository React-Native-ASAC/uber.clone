import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, Touchable, TouchableOpacity } from 'react-native'
import NavObtions from '../components/NavObtions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice'
import NavFavorites from '../components/NavFavorites';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Permissions } from 'expo';
import * as Location from 'expo-location';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const [location, setLocation] = useState({})

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
    console.log('state', location);
    dispatch(setOrigin({
      location: { lat: loc.coords.latitude, lng: loc.coords.longitude },
      description: 'user location'
    }))
    dispatch(setDestination(null))
  }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://links.papareact.com/gzs"
          }} />

        <View style={tw`flex flex-row justify-evenly`}>
          <GooglePlacesAutocomplete
            placeholder='Where From...?'
            styles={styles}
            onPress={(data, details = null) => {
              console.log('details', details.geometry.location);
              console.log('data', data.description);
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
              }))

              dispatch(setDestination(null))
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={350}
          />

          <TouchableOpacity style={tw`bg-white top-2.5`}>
            <Icon
              name="map-marker"
              type="font-awesome"
              size={30}
              color="#26d94b"
              onPress={() => getLocation()}
            />
          </TouchableOpacity>

        </View>

        <NavObtions />

        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textInput: {
    fontSize: 18,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})
