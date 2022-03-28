/* eslint-disable prettier/prettier */

import React from 'react';

import {View, Text, ImageBackground, Image} from 'react-native';
import Button from '../../components/atoms/button';
import {styles} from './styles';

const logo = require('../../../assets/images/logo.png');
const startImage = require('../../../assets/images/startImage.jpg');

const Start = ({navigation}) => {
  return (
    <ImageBackground
      source={startImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <Text style={styles.text}>
          Únete a la comunidad y recibe recomendaciones de los últimos juegos
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            text={'Empezar'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Start;
