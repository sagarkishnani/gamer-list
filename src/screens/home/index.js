/* eslint-disable prettier/prettier */
import React from 'react';

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {styles} from '../home/styles';

const background = require('../../../assets/images/background.png');
const logo = require('../../../assets/images/logo.png');

const Home = () => {
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
            <TextInput style={styles.input} placeholder="Buscar"></TextInput>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
