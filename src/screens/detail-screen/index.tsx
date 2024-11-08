import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  InteractionManager,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Item from './item-list';

type ItemProps = {title: string};
const fakeData = [
  {
    id: 1,
    createdAt: '2023-07-04T07:58:36.752Z',
    updatedAt: '2023-07-04T07:58:36.753Z',
    name: 'Relationships',
  },
  {
    id: 2,
    createdAt: '2023-07-04T07:58:46.123Z',
    updatedAt: '2023-07-04T07:58:46.123Z',
    name: 'Family',
  },
  {
    id: 3,
    createdAt: '2023-07-04T07:58:55.888Z',
    updatedAt: '2023-07-04T07:58:55.889Z',
    name: 'Self Harm',
  },
  {
    id: 4,
    createdAt: '2023-07-04T07:59:02.559Z',
    updatedAt: '2023-07-04T07:59:02.559Z',
    name: 'Friends',
  },
  {
    id: 5,
    createdAt: '2023-07-04T07:59:09.822Z',
    updatedAt: '2023-07-04T07:59:09.823Z',
    name: 'Hopes',
  },
  {
    id: 6,
    createdAt: '2023-07-04T07:59:17.774Z',
    updatedAt: '2023-07-04T07:59:17.775Z',
    name: 'Bullying',
  },
  {
    id: 7,
    createdAt: '2023-07-04T07:59:24.010Z',
    updatedAt: '2023-07-04T07:59:24.011Z',
    name: 'Health',
  },
  {
    id: 8,
    createdAt: '2023-07-04T07:59:30.390Z',
    updatedAt: '2023-07-04T07:59:30.391Z',
    name: 'Work',
  },
  {
    id: 9,
    createdAt: '2023-07-04T07:59:33.288Z',
    updatedAt: '2023-07-04T07:59:33.289Z',
    name: 'Music',
  },
  {
    id: 10,
    createdAt: '2023-07-04T07:59:48.724Z',
    updatedAt: '2023-07-04T07:59:48.724Z',
    name: 'Helpful Tips',
  },
  {
    id: 11,
    createdAt: '2023-07-04T08:00:06.246Z',
    updatedAt: '2023-07-04T08:00:06.247Z',
    name: 'Parenting',
  },
  {
    id: 12,
    createdAt: '2023-07-04T08:00:10.476Z',
    updatedAt: '2023-07-04T08:00:10.477Z',
    name: 'Education',
  },
  {
    id: 13,
    createdAt: '2023-07-04T08:00:20.111Z',
    updatedAt: '2023-07-04T08:00:20.112Z',
    name: 'Religion',
  },
  {
    id: 14,
    createdAt: '2023-07-04T08:00:25.020Z',
    updatedAt: '2023-07-04T08:00:25.020Z',
    name: 'LGBT',
  },
  {
    id: 15,
    createdAt: '2023-07-04T08:00:46.951Z',
    updatedAt: '2023-07-04T08:00:46.952Z',
    name: 'Pregnancy',
  },
  {
    id: 16,
    createdAt: '2023-07-04T08:00:54.294Z',
    updatedAt: '2023-07-04T08:00:54.295Z',
    name: 'Positive',
  },
  {
    id: 17,
    createdAt: '2023-07-04T08:01:03.695Z',
    updatedAt: '2023-07-04T08:01:03.695Z',
    name: 'Mental Health',
  },
  {
    id: 18,
    createdAt: '2023-07-04T08:01:17.942Z',
    updatedAt: '2023-07-04T08:01:17.942Z',
    name: 'My Story',
  },
  {
    id: 19,
    createdAt: '2023-07-04T08:01:24.001Z',
    updatedAt: '2023-07-04T08:01:24.001Z',
    name: 'Poetry',
  },
  {
    id: 20,
    createdAt: '2023-07-04T08:01:42.103Z',
    updatedAt: '2023-07-04T08:01:42.104Z',
    name: 'Eating Disorder',
  },
  {
    id: 21,
    createdAt: '2023-07-04T08:01:55.813Z',
    updatedAt: '2023-07-04T08:01:55.814Z',
    name: 'Addiction',
  },
  {
    id: 22,
    createdAt: '2023-07-04T08:02:04.296Z',
    updatedAt: '2023-07-04T08:02:04.297Z',
    name: 'Self-Care',
  },
  {
    id: 23,
    createdAt: '2023-07-04T08:02:16.810Z',
    updatedAt: '2023-07-04T08:02:16.811Z',
    name: 'I Need Help',
  },
  {
    id: 24,
    createdAt: '2023-07-04T08:02:25.882Z',
    updatedAt: '2023-07-04T08:02:25.882Z',
    name: 'New Parents',
  },
  {
    id: 25,
    createdAt: '2023-07-04T08:02:35.963Z',
    updatedAt: '2023-07-04T08:02:35.964Z',
    name: 'Gaming',
  },
  {
    id: 26,
    createdAt: '2023-07-04T08:02:43.628Z',
    updatedAt: '2023-07-04T08:02:43.628Z',
    name: 'Grief',
  },
  {
    id: 27,
    createdAt: '2023-07-04T08:02:57.396Z',
    updatedAt: '2023-07-04T08:02:57.397Z',
    name: 'Anxiety',
  },
  {
    id: 28,
    createdAt: '2023-07-04T08:03:11.020Z',
    updatedAt: '2023-07-04T08:03:11.021Z',
    name: 'Disabilities',
  },
  {
    id: 29,
    createdAt: '2023-07-04T08:04:41.997Z',
    updatedAt: '2023-07-04T08:04:41.998Z',
    name: 'Depression',
  },
  {
    id: 30,
    createdAt: '2023-07-04T08:04:50.747Z',
    updatedAt: '2023-07-04T08:04:50.748Z',
    name: 'Life Hacks',
  },
  {
    id: 31,
    createdAt: '2023-07-04T08:05:00.829Z',
    updatedAt: '2023-07-04T08:05:00.830Z',
    name: 'Politics',
  },
  {
    id: 32,
    createdAt: '2023-07-04T08:05:07.957Z',
    updatedAt: '2023-07-04T08:05:07.958Z',
    name: 'Others',
  },
];

const numColumns = 3;

export default function DetailScreen() {
  const image = require('@assets/imageDetail.png');
  // const image = require('@assets/image.jpg');
  const iconBack = require('@assets/ArrowBack_1.png');

  const navigation: any = useNavigation();

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  return (
    <ImageBackground
      source={image}
      style={{flex: 1, width: '100%', height: '100%'}}
      resizeMode={true ? 'cover' : 'contain'}
      imageStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        width: '100%',
        height: '60%',
      }}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)', 'rgba(0,0,0,1)']} // Black to transparent
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.8}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={iconBack} resizeMode="cover" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignContent: 'center'}}
              onPress={() => {}}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={{height: 120}}></View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignSelf: 'flex-start',
              padding: 10,
            }}>
            <View style={{marginBottom: 10}}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 22,
                  color: '#FFFFFF',
                  fontWeight: '400',
                  fontFamily: 'Lato',
                  marginBottom: 10,
                }}>
                {'Wellcome to Nexle Entrance Test'}
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 14,
                  color: `${'#FFFFFF'}82`,
                  fontWeight: '400',
                  fontFamily: 'Lato',
                }}>
                {
                  'Please select categories what you would like to see on your feed. You can set this later on Filter.'
                }
              </Text>
            </View>
            <FlatList
              data={formatData(fakeData, numColumns)}
              renderItem={({item}) => <Item title={item.name} />}
              keyExtractor={item => item.id}
              numColumns={numColumns}
              // columnWrapperStyle={{justifyContent: 'space-between'}}
              style={{
                flex: 1,
                alignContent: 'center',
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
