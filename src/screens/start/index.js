/* eslint-disable prettier/prettier */

import React from 'react';

import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const startImage = require('../../../assets/images/startImage.jpg');

const Start = ({navigation, route}) => {
  return (
    <ImageBackground
      source={startImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.logo}>LOGO</Text>
        <Text style={styles.text}>
          Únete a la comunidad y recibe recomendaciones de los últimos juegos
        </Text>
        <View style={styles.buttonContainer}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#FE53BB', '#09FBD3']}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.buttonText}>Empezar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Start;
