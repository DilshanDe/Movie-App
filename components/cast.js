import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window');

export default function Cast({cast,navigation}) {
    let personName='Dilshan';
    let characterName='Kaveesha';
  return (
    <View className='my-6'>
      <Text className='text-white text-lg mx-4 mb-5'> Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >{
        cast && cast.map((person,index)=>{
            return(
                <TouchableOpacity
                key={index}
                className='mr-4 items-center'
                onPress={() => navigation.navigate('PersonScreen', { person })}

                >
                     
                     
                     <View className="overflow-hidden rounded-full h-20 w-20 border-2 border-white shadow-lg">
                        <Image
                            className="h-24 w-20 rounded-2xl"
                            source={require('../assets/images/face.png')}
                            style={{height:height*0.25,width:width*0.5}}
                        />
                    </View>
                    

                    
                    <Text className='text-white text-xs mt-1'>
                        {
                            characterName.length>10? characterName.slice(0,10)+'...':characterName
                        }

                    </Text>
                    <Text className='text-neutral-400 text-xs mt-1'>
                        {
                            personName.length>10? personName.slice(0,10)+'...':personName
                        }

                    </Text>
                </TouchableOpacity>
            )
        })
      }

      </ScrollView>
    </View>
  )
}