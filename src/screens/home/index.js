/* eslint-disable prettier/prettier */
import React from 'react';

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';

import {styles} from '../home/styles';

const background = require('../../../assets/images/background.png');
const logo = require('../../../assets/images/logoLong.png');
const searchIcon = require('../../../assets/images/icons/search.png');

const DATA = [
  {
    id: '1',
    title: 'The Witcher',
    image:
      'https://static.bandainamcoent.eu/high/the-witcher/the-witcher-3-wild-hunt/00-page-setup/tw3_game-thumbnail.jpg',
  },
  {
    id: '2',
    title: 'Red Dead Redemption II',
    image:
      'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
  },
  {
    id: '3',
    title: 'The Legend of Zelda',
    image:
      'https://media.revistagq.com/photos/60019f14ebba169d949045e0/master/pass/legend-of-zelda.jpeg',
  },
  {
    id: '4',
    title: 'The Last of Us',
    image:
      'http://paradacreativa.es/wp-content/uploads/2021/01/the-last-of-us-pc-2.jpg',
  },
];

const Item = ({title, image, navigation}) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Image source={{uri: image}} style={styles.cardImage}></Image>
      <Text style={styles.titleCard}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const Home = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item.title} image={item.image} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollView}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.background}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}></Image>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.searchIcon} source={searchIcon}></Image>
            <TextInput
              style={styles.input}
              placeholder="Buscar"
              placeholderTextColor={'#fff'}></TextInput>
          </View>
          <View style={styles.categorias}>
            <View style={styles.tituloCategorias}>
              <Text style={styles.subtitloCategorias}>Recomendaciones</Text>
              <TouchableOpacity style={styles.buttonCategorias}>
                <Text style={styles.textoCategorias}>Ver todas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail');
              }}>
              <Text>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
