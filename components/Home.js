import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import GoForwardButtons from '../constants/GoForwardButtons';
import GenericLabels from '../constants/GenericLabels';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
    lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    openSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    roboto: require('../assets/fonts/RobotoCondensed-Regular.ttf')
  });
};

const Home = () => {
  const navigation = useNavigation();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataIsLoaded(true)}
      />
    );

  }

  return (
    <View style={styles.screen}>

      <View style={styles.headerSubst}>
        <Text style={styles.textInsideHeaderSubst}>Repositório de Vinhos Vegan</Text>
      </View>

      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="ios-wine" size={44} color="black" />
          <MaterialCommunityIcons name="bottle-wine" size={44} color="black" />
          <Ionicons name="md-wine" size={44} color="black" />
        </View>

        <View style={styles.introText}>
          <Text style={GenericLabels.welcomeText}>Bem-vindo</Text>

        </View>

        <TouchableOpacity
          style={GoForwardButtons.forwardButton}
          onPress={() => navigation.navigate('StartScreen')}
        >
          <Text style={GoForwardButtons.buttonLabel}>Vamos a isso!</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9E79F',
  },
  headerSubst: {
    width: '100%',
    height: 100,
    paddingTop: 36,
    backgroundColor: '#F9E79F',
    alignItems: 'center',
    justifyContent: 'center'

  },
  textInsideHeaderSubst: {
    fontSize: 33,
    fontFamily: 'lobster',
    color: '#E74C3C'
  }



})


export default Home;