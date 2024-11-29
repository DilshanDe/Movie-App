import React, { useState } from 'react';
import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from 'expo-router';
import { styles } from '../theme';
import { HeartIcon } from 'react-native-heroicons/solid';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'my-3';

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false); 

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back Button */}
      <SafeAreaView
        className={`z-20 w-full flex-row justify-between items-center px-4 ${verticalMargin}`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon
            size={35}
            color={isFavourite ? 'red' : 'white'} 
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Person Deatils*/}
      <View>
        <View className='flex-row justify-center'>
            <View className='items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500'>
            <Image
            source={require('../assets/images/person.png')}
            style={{height:height*0.43,width:width*0.74}}
            />


            </View>
            
        </View>
      </View>
    </ScrollView>
  );
}
