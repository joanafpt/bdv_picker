import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import OkInputButtons from '../constants/OkInputButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import ImputStyles from '../constants/ImputStyles';
import Waiting from '../constants/Waiting';
import functions from "../functions/functions.js";
import { useNavigation } from '@react-navigation/native';
import Container from './Container';

import getArrays from '../functions/getArrays';

const FindByQuality = () => {

    /*  let qualities = ["Todas","Todas","Todas","Todas","Brancos e Rosados","Brancos e Rosados","Brancos e Rosados","Brancos e Rosados","Brancos e Rosados","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Rosé","Kosher","Todas","LBV, Vintage, Ruby, Reserva Ruby","LBV, Vintage, Ruby, Reserva Ruby","LBV, Vintage, Ruby, Reserva Ruby","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Dão","Todas","Todas","Todas","Todas","Todas (inclusivé o Primeiro Vinho Azul  Português)","Todas","Tinto, Reserva e Grande Reserva","Branco e Tinto","Branco, Tinto, Reserva e Grande Reserva","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas com certificação IG Alentejano ou DOP Alentejo","Todas","Todas","LBV, Vintage","LBV, Vintage, Ruby, Reserva Ruby","Todas","LBV, Vintage, Quinta…","Todas EXCEPTO Branco e Rosé","LBV, Vintage, Ruby, Reserva Ruby","Todas","Todas","Todas","LBV, Vintage","Tinto","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Todas","Brancos, Rosés, Tinto Colheita Selecionada 2011 e  Chardonnay","Branco","Colheitas a partir do ano de 2013 **","Todas","Todas","Todas","LBV, Vintage","Tinto","Biológico"];
      qualities = qualities.sort();
      qualities = [...new Set(qualities)]; */

    const [enteredInput, setEnteredInput] = useState('');
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [waitingText, displayWaitingText] = useState('');
    const [dontGo, setDontGo] = useState('');
    const [selectedQuality, setSelectedQuality] = useState(qualities[0]);
    const [populateArray, setPopulateArray] = useState([]);
    const [arrayIsPopulated, setArrayIsPopulated] = useState(false);

    const navigation = useNavigation();

    //popular array com as qualidades

    const getQualities = () => {
        getArrays.getArrayQualities(myCallback);
    }
    const myCallback = (data) => {
        // console.log([...data]);
        //setPopulateArray([...data]);
        setPopulateArray([...data].sort());
        console.log(Array.isArray(data));
        setArrayIsPopulated(true);
    }

    useEffect(() => {
        getQualities();
    }, []);

    //fim de popular o array com as qualidades
    const getByQuality = () => {
        setDontGo('');
        setIsLoading(true);
        functions.getDataQualityFromApi(selectedQuality, callback);
        displayWaitingText('Por favor aguarde...');
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        navigation.navigate('ResultsByQuality', { data: data, isLoading: isLoading });
        setIsLoading(false);
        //  console.log(returnedData, ' rd dentro do callback');
        displayWaitingText('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container>
                <View style={ImputStyles.imputContainerWithDropDown}>
                    <Picker
                        style={{ width: 200, height: 29, marginBottom: 100 }}
                        mode="dropdown"
                        selectedValue={selectedQuality} //é onde para o picker - tem de ficar no q a pessoa escolher
                        onValueChange={(itemValue, itemIndex) => setSelectedQuality(itemValue)}>
                        {populateArray.map((element) => {
                            return (<Picker.Item label={element} value={element} key={element} />)
                        })}
                    </Picker>
                </View>


                <View style={GenericStyleButtons.backButton}>
                    <View style={GenericStyleButtons.firstButton}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={() => navigation.navigate('StartScreen')}
                        >
                            <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={GenericStyleButtons.secondButton}>
                        <TouchableOpacity
                            style={MenuGoForwardButtons.forwardTouchable}
                            onPress={getByQuality}>
                            <Text style={OkInputButtons.buttonLabel}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Waiting.waitingView}>
                    <Text style={Waiting.waitingText}>{waitingText ? waitingText : null}</Text>
                </View>
                <View>
                    <Text style={Waiting.waitingText}>{dontGo}</Text>
                </View>

            </Container>
        </TouchableWithoutFeedback>
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
});
export default FindByQuality;