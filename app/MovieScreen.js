import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from './movieList';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function MovieScreen() {
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const { params: item } = useRoute();
  const movieName = 'ant-fddsjakalalbbbbbbb';
  const[cast,setCast]=useState([1,2,3,4,5]);
  const[similarMovies,setSimilarMovies]=useState([1,2,3,4,5]);

  useEffect(() => {
    // Call movie API
    if (item) {
      console.log('Movie details:', item);
    }
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* Back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}
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
              color={isFavourite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require('../assets/images/movieposter.png')}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width,
              height: height * 0.4,
              position: 'absolute',
              bottom: 0,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>
      {/* Movie Details */}
      <View
        style={{
          marginTop: height * 0.05, 
          paddingHorizontal: 20, 
        }}
        className="space-y-3"
      >
        {/* Title */}
        <Text
          className="text-white text-center text-3xl font-bold tracking-wider"
          numberOfLines={2}
          ellipsizeMode="tail" 
        >
          {movieName}
        </Text>
        {/* states ,relese, runtime*/}
        <Text className='text-neutral-400 font-semibold text-base text-center'>
          Relesed.2024.180min
        </Text>
        {/* geners*/}
        <View className='flex-row justify-center mx-4 space-x-2'>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Action.
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Thill.
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Comedy.
          </Text>
        </View>
        {/*description*/}
        <Text className='text-neutral-400 mx-4 tracking-wide'>
          dsjkhdsjnslklksdjoidjiojidsiojdfisoiohdsfhnvdsjihdcsdcsnodsdvcsiodvsiondsvioiodsviondsoniondvsionfdvsnionfdsvniodvsnionvd
        </Text>
      </View>
      {/*cast*/}
      <Cast navigation={navigation} cast={cast}/>
      {/*similar movies*/}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
    </ScrollView>
  );
}
