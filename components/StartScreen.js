import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Name from './Name';
import Producer from './Producer';
import Quality from './Quality';
import Complete from './Complete';
import CancelButtons from '../constants/CancelButtons';
import GenericLabels from '../constants/GenericLabels';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';

const StartScreen = () => {
    const navigation = useNavigation();
    const colors = ['#7FB3D5', '#E74C3C', '#F8C471', '#76D7C4', '#73C6B6', '#FAD7A0', '#BECCE4', '#DFC702', '#FFE8FB', '#F8C471', '#76D7C4', '#FAD7A0', '#EAFAF1', '#F1948A', '#A9DFBF', '#3498DB', '#F39C12', '#FDEDEC', '#ABEBC6', '#FCF3CF'];

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white',
            paddingBottom: 100,
            paddingTop: 50,
            backgroundColor: colors[Math.floor(Math.random() * 19) + 1]

        }}>


            <View style={styles.screen}>
                <View style={styles.introTextContainer}>
                    <Text style={GenericLabels.startScreenIntroText}>Selecione o tipo de pesquisa</Text>
                </View>

                <View style={styles.sideBySide}>
                    <Name />
                    <Producer />
                </View>

                <View style={styles.sideBySide}>
                    <Quality />
                    <Complete />
                </View>
            </View>

            <TouchableOpacity
                style={CancelButtons.backTouchable}
                onPress={() => { navigation.navigate('Home') }}
            >
                <Text style={CancelButtons.buttonLabel}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 50
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center', //aligns horiz
        backgroundColor: 'transparent'
    },
    sideBySide: {
        flexDirection: 'row',

    },
    introTextContainer: {
        marginVertical: 20,
    },


})


export default StartScreen;