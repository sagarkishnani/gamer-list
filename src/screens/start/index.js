/* eslint-disable prettier/prettier */

import React from 'react';

import {View, Text, Button, ImageBackground} from 'react-native';
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
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate('Home');
          }}></Button>
      </View>
    </ImageBackground>
  );
};

export default Start;
