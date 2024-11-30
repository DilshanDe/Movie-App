import React, { useState } from 'react';
import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from 'expo-router';
import { styles } from '../theme';
import { HeartIcon } from 'react-native-heroicons/solid';
import MovieList from './movieList';
import Loading from '../components/loading';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'my-3';

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false); 
  const[personMovies,setPersonMovies]=useState([1,2,3,4])
  const[loading,setLoading]=useState(false);

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

      {
        loading?(
          <Loading/>
        ):(
                <View>
                <View className='flex-row justify-center'
                style={{
                  shadowColor:'gray',
                  shadowRadius:40,
                  shadowOffset:{width:0,height:5},
                  shadowOpacity:1
                }}
                
                >
                    <View className='items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500'>
                    <Image
                    source={require('../assets/images/person.png')}
                    style={{height:height*0.43,width:width*0.74}}
                    />
        
        
                    </View>
                    
                </View>
                <View className='mt-6'>
                  <Text className='text-3xl text-white font-bold text-center'>
                    Dilshan De Silva
                  </Text>
                  <Text className='text-base text-neutral-500 text-center'>
                    Sri Lanka, Colombo
        
                  </Text>
                </View>
                <View className='mx-3 mt-6  p-4 flex-row justify-between items-center bg-neutral-700 rounded-full'>
                  <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                    <Text className='text-white font-semibold'>Gender</Text>
                    <Text className='text-neutral-300 text-sm'>Male</Text>
                  </View>
                  <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                    <Text className='text-white font-semibold'>Birthday</Text>
                    <Text className='text-neutral-300 text-sm'>2001/04/05</Text>
                  </View>
                  <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                    <Text className='text-white font-semibold'>Known for</Text>
                    <Text className='text-neutral-300 text-sm'>Acting</Text>
                  </View>
                  <View className=' px-2 items-center'>
                    <Text className='text-white font-semibold'>popularity</Text>
                    <Text className='text-neutral-300 text-sm'>78.5</Text>
                  </View>
                </View>
                <View className='my-6 mx-2 space-y-2'>
                  <Text className='text-white text-lg'>Biography</Text>
                  <Text className='text-neutral-400 tracking-wide'>
                  To provide a biography of an actor, could you please specify which actor you're referring to? This will help me tailor the content to their career and achievements. If you're looking for an example or a generic template, let me know!
                  </Text>
                </View>
                {/*Movies*/}
                <MovieList title={'Movies'}hideSeeAll={true} data={personMovies}/>
              </View>

        )
      }
     
    </ScrollView>
  );
}
