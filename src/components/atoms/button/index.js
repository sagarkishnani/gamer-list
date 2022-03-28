/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const Button = ({text, style, ...props}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FE53BB', '#09FBD3']}
      style={styles.linearGradient}>
      <TouchableOpacity {...props}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;
