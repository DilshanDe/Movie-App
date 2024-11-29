import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function MovieList({ title, data, hideSeeAll }) {
  const navigation = useNavigation();

  // Handle click to navigate to MovieScreen with selected movie data
  const handleClick = (movie) => {
    navigation.push('MovieScreen', { movie });
  };

  const movieName = 'ant-fddsjakalalbbbbbbb'; // Temporary placeholder name

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index} // Properly place the key here
            onPress={() => handleClick(item)} // Use handleClick function
          >
            <View className="space-y-1 mr-4">
              <Image
                source={require('../assets/images/movieposter.png')}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-neutral-300 ml-1">
                {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
