import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";
import Loading from "../components/loading";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]); 
  const movieName = ["Ant-Man", "Spiderman", "Batman Begins", "Iron Man"]; 
  const[loading,setLoading]=useState(false);


  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      {/* Search Bar */}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("index")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      {
        loading?(
          <Loading/>
        ): 
          results.length>0?(
                            <ScrollView
                          showsVerticalScrollIndicator={false}
                          contentContainerStyle={{ paddingHorizontal: 15 }}
                          className="space-y-3"
                        >
                          <Text className="text-white font-semibold ml-1">
                            Results({results.length})
                          </Text>
                          <View className="flex-row justify-between flex-wrap">
                            {results.map((item, index) => {
                              return (
                                <TouchableWithoutFeedback
                                  key={index}
                                  onPress={() => navigation.push("MovieScreen", { id: item })}
                                >
                                  <View className="space-y-3 mb-4">
                                    <Image
                                      className="rounded-3xl"
                                      source={require("../assets/images/movieposter.png")}
                                      style={{ width: width * 0.44, height: height * 0.3 }}
                                    />
                                    <Text className="text-neutral-300 ml-1">
                                      {movieName[index]?.length > 22
                                        ? movieName[index].slice(0, 22) + "..."
                                        : movieName[index]}
                                    </Text>
                                  </View>
                                </TouchableWithoutFeedback>
                              );
                            })}
                          </View>
                        </ScrollView>
  
          ):(
            <View className='flex-row justify-center'>
              <Image source={require('../assets/images/dd.webp')}
              className="w-96 h-96"/>
            </View>
  
          )
        
  
      }

     
     
    </SafeAreaView>
  );
}
