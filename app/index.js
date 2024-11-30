import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";

import { useNavigation } from "expo-router";
import MovieList from "./movieList";
import Loading from "../components/loading";

const ios = Platform.OS === "ios";

export default function Index() {
  const [trending, setTrending] = useState([1, 2, 3,4]);
  const [upcoming, setUpcoming] = useState([1, 2, 3,4]);
  const [topRated, setTopRated] = useState([1, 2, 3,4]);
  const navigation = useNavigation();
  const[loading,setLoading]=useState(false);


  const handleSearchClick = () => {
    navigation.navigate("SearchScreen"); 
  };

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className="mb-3">
      <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.9)" />

        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={handleSearchClick}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      {
        loading?(
          <Loading/>
        ):(
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/* Trending Movies */}
            <TrendingMovies data={trending} />
            {/* Upcoming Movies */}
            <MovieList title="Upcoming" data={upcoming} />
            {/* Top Rated Movies */}
            <MovieList title="Top Rated" data={topRated} />
          </ScrollView>

        )
      }

     
    </View>
  );
}
