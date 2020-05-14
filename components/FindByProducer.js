import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import OkInputButtons from '../constants/OkInputButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import ImputStyles from '../constants/ImputStyles';
import Waiting from '../constants/Waiting';
import { useNavigation } from '@react-navigation/native';
import functions from "../functions/functions.js";
import Container from './Container';
import getArrays from '../functions/getArrays';

const FindByProducer = () => {

  /*  let producers = ["A&D Wines","A&D Wines","A&D Wines","Adega Cooperativa de Ponte de Lima","Adega Cooperativa do Fundão","Adega Cooperativa do Fundão","Adega Cooperativa do Fundão","Adega Cooperativa do Fundão","Adega Cooperativa do Fundão","Adega Cooperativa do Redondo","Adega de Cantanhede","Adega de Redondo","Adega de Redondo","Adega de Redondo","Adega de Redondo","Adega de Redondo","Adega de Redondo","Adega do Monte dos Perdigões (Granadeiro)","Adega do Redondo","Aveleda","Aveleda","Bacalhôa","Barros","Burmester","Cálem","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","Campelo","CampoLargo","Carmim","Casa de Mouraz","Casa Santos Lima","Casal da Coelheira","Casal Figueira","Casal Santa Maria","Caves Aliança","Companhia das Lezírias","Companhia das Quintas","Companhia das Quintas","Companhia das Quintas","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cooperativa Agrícola Santo Isidro de Pegões ","Cortes de Cima","Cortes de Cima","Cortes de Cima","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","DFJ Vinhos","D'Origem, Casal de Loivos-Douro","Esporão","Essência do Douro Wines & Gourmet","Essência do Douro Wines & Gourmet","Ferreira","Gilberts","Guiness","Grupo Taylor´s","Júlio Bastos","Kopke","Little Farm Licores","Luis Pato","Murganheira","Offley","Quinta da Basília","Quinta da Devesa","Quinta da Lixa","Quinta das Arcas","Quinta das Carvalhas","Quinta das Torres","Quinta de Arcossó","Quinta de Fiães","Quinta de Gomariz","Quinta de S. Sebastião","Quinta de S. Sebastião","Quinta do Barranco Longo","Quinta do Barranco Longo","Quinta do Montalto","Quinta do Ribeirinho","Gravato","Gravato","Sandeman","Sousa Otto & Friends","Symington Family Estates"];

    producers = producers.sort();

    producers  = [...new Set(producers)]; */

  //  const [enteredInput, setEnteredInput] = useState('');
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [waitingText, displayWaitingText] = useState('');
    const [dontGo, setDontGo] = useState('');
    const [selectedProducer, setSelectedProducer] = useState(producers[0]);
    const [populateArray, setPopulateArray] = useState([]);
    const [arrayIsPopulated, setArrayIsPopulated] = useState(false);
    
    const navigation = useNavigation();

    /*Popular o array com os prdutores */
    const getProducers = () => {
        getArrays.getArrayProducers(myCallback);
    }

    const myCallback = (data) => {
        setPopulateArray([...data].sort());
        console.log(Array.isArray(data));
        setArrayIsPopulated(true); 
    }

   /*FIM DE Popular o array com os prdutores */
   useEffect(() => {
    getProducers();
}, []);
 

    const getProducer = () => {
        setDontGo('');
        setIsLoading(true);
        functions.getDataProducerFromApi(selectedProducer, callback);
        displayWaitingText('Por favor aguarde...');
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        navigation.navigate('ResultsByProducer', { data: data, isLoading: isLoading });
        setIsLoading(false);
        displayWaitingText('');
    }


    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container>
            <View style={ImputStyles.imputContainerWithDropDown}>
                     <Picker
                        style={{ width: 200, height: 29, marginBottom: 100 }}
                        mode="dropdown"
                        selectedValue={selectedProducer} //é onde para o picker - tem de ficar no q a pessoa escolher
                        onValueChange={(itemValue, itemIndex) => setSelectedProducer(itemValue)}>
                        {populateArray.map((element) => {
                            return (<Picker.Item label={element} value={element} key={element} />)
                        })}
                    </Picker>
                </View>

                <View style={GenericStyleButtons.backButton}>
                    <View style={GenericStyleButtons.firstButton}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={() => { navigation.navigate('StartScreen') }}
                        >
                            <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={GenericStyleButtons.secondButton}>
                    <TouchableOpacity
                       style={MenuGoForwardButtons.forwardTouchable}
                        onPress={getProducer}>
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
export default FindByProducer;