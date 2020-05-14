import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClickableSquare from './ClickableSquare';
import MenuSquaresLabels from '../constants/MenuSquaresLabels';
import OkButtonsInsideSquares from '../constants/OkButtonsInsideSquares';
import { useNavigation } from '@react-navigation/native';

const Producer = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ClickableSquare style={styles.square}>
                <Text style={MenuSquaresLabels.text}>Produtor</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={OkButtonsInsideSquares.okButton}
                        onPress={() => {navigation.navigate('FindByProducer')}}
                    >
                        <Text style={OkButtonsInsideSquares.buttonLabel}>OK</Text>
                    </TouchableOpacity>
                </View>
            </ClickableSquare>
          
        </View>

    )

}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom: '35%',
    },
    button: {
        alignContent: 'center',
        alignItems: 'center',
    },

});
export default Producer;