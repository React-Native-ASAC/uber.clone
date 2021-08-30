import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: 'uber-x-123',
    title: 'UberX',
    multipayer: 1,
    img: 'https://links.papareact.com/3pn',
  },
  {
    id: 'uber-xl-456',
    title: 'Uber LX',
    multipayer: 1.2,
    img: 'https://links.papareact.com/5w8',
  },
  {
    id: 'uber-lux-789',
    title: 'Uber LUX',
    multipayer: 1.7,
    img: 'https://links.papareact.com/7pf',
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected , setSelected] = useState(null)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-2 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-4 text-xl`}>ride options</Text>
      </View>

      <FlatList data={data} keyExtractor={(item) => item.id}
        renderItem={({item})=> {
          return(
          <TouchableOpacity
           onPress={()=> setSelected(item)}
           style={tw`flex-row justify-between items-center px-6 ${item.id === selected?.id && 'bg-gray-200'}`}>
            <Image
            style={{
              width:80,
              height:80,
              resizeMode:'contain'
            }}
            source={{uri:item.img}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>travel time ...</Text>
            </View>
            <Text style={tw`text-xl`} >$9</Text>
          </TouchableOpacity>)
        }}
      />

      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
        <Text style={tw`text-center text-white text-xl`}>
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
