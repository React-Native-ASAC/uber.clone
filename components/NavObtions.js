import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View ,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavObtions = () => {

  const navigation = useNavigation()
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item})=>(
      <TouchableOpacity
      onPress={()=> navigation.navigate(item.screen)}
      style={tw`p-2 p-6 p-8 p-4 bg-gray-200 m-2 w-40` }
      >
        <View>
          <Image
          style={{width:120,height:120,resizeMode:'contain'}}
          source={{uri:item.image}}
          />
        </View>
        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>

        <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          name='arrowright'
          color='white'
          type='antdesign'
        />
      </TouchableOpacity>
    )}
    
    />
  );
};

export default NavObtions;

const styles = StyleSheet.create({});
