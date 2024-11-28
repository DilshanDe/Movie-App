import {View,Text,SafeAreaView,StatusBar,Platform,TouchableOpacity,ScrollView,} from 'react-native';
import React, { useState } from 'react';
import {Bars3CenterLeftIcon,MagnifyingGlassIcon,} from 'react-native-heroicons/outline';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import MovieList from './movieList';

const ios = Platform.OS === 'ios';

export default function Index() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className="mb-3">
        <StatusBar barStyle="light-content" backgroundColor="transparent" />

        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies */}
        <TrendingMovies data={trending} />
        {/* upcoming Movies */}
        <MovieList title='upcoming'data={upcoming}/>
         {/* topRated Movies */}
         <MovieList title='Top Rated'data={topRated}/>
      </ScrollView>
    </View>
  );
}
