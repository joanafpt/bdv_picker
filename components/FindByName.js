import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';
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
const FindByName = () => {

    //teste, isto seria para obter com API! 
 /*   let names = [
        "Casa do Arrabalde",
        "Espinhosos",
        "LIV",
        "Adega Cooperativa de Ponte de Lima",
        "Alambar",
        "Alpedrinha",
        "Oito Bucas",
        "Cova da Beira",
        "Pedra d'Hera",
        "Todas",
        "Todas",
        "Anta da Serra",
        "Latitude",
        "Longitude",
        "Maré Viva",
        "Porta da Ravessa",
        "Real Lavrador",
        "Tapada do Barão, Poliphonia e Vale do Rico Homem",
        "Todas",
        "Casal Garcia",
        "Grinalda",
        "Todas",
        "Barros",
        "Burmester",
        "Cálem",
        "Adamante",
        "Adega do Presidente",
        "Campelo",
        "Campo da Porta",
        "Casal da Seara",
        "Chantel Loureiro",
        "Coração da Minha",
        "Crista de Galo",
        "Cruzeiro Minhoto",
        "Lourinho",
        "Mesa do Presidente",
        "Miranda",
        "Monte Seco",
        "Solouro",
        "Tapada do Marquês",
        "Vindimeiro",
        "Todas",
        "Todas",
        "Casa de Mouraz",
        "Todas",
        "Casal da Coelheira, Terraços do Tejo e Mythos",
        "António",
        "Casal Santa Maria",
        "Todas",
        "Todas",
        "Herdade da Farizoa (Alentejano)",
        "Tradição (Lisboa)",
        "Uniqo (Douro)",
        "Caves de Pegões",
        "Charneca de Pegões",
        "Fontanário de Pegões",
        "Fonte Nico",
        "Rovisco Pais",
        "Santo Isidro",
        "Sobreiro de Pegões",
        "Vale da Judia",
        "Vinhas de Pegões",
        "Chaminé",
        "Cortes de Cima",
        "Courela",
        "Alta Corte",
        "Aluado",
        "Bigode",
        "Casa do Lago",
        "Consensus",
        "Coreto",
        "DFJ",
        "Escada",
        "Fonte do Beco",
        "Francos",
        "Grand'Arte",
        "Manta Preta",
        "Monte Alentejano",
        "Patamar",
        "Paxis",
        "Pedras do Monte",
        "Point West",
        "Pormar",
        "Portada",
        "Rocio",
        "Scancio",
        "Segada",
        "Storks Landing",
        "Veja",
        "Todas",
        "Todas, EXCEPTO a marca Alandra",
        "Flor do Tua, Paredes Meias e Palácio dos Távoras",
        "Fazenda da Boavista da Mata",
        "Ferreira",
        "Gilberts",
        "Guiness",
        "Taylor´s",
        "Dona Maria",
        "Kopke",
        "Todas",
        "Todas",
        "Murganheira",
        "Offley",
        "Basília e Quinta da Basília",
        "Quinta da Devesa",
        "Todas",
        "Todas",
        "Alma Nova",
        "Sedinhas - Casa das Torres",
        "Quinta de Arcossó",
        "Quinta de Fiães",
        "Quinta de Gomariz",
        "Mil Caminhos",
        "S. Sebastião",
        "Barranco Longo",
        "Remexido",
        "Todas - Colheitas a partir do ano de 2013 **",
        "Todas",
        "Quinta dos Barreiros",
        "Quinta dos Cardeais",
        "Sandeman",
        "Riso",
        "Altano Douro",
    ] 
    names = names.sort(); */
    const navigation = useNavigation();
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [waitingText, displayWaitingText] = useState('');
    const [dontGo, setDontGo] = useState('');
    const [selectedName, setSelectedName] = useState(names[0]);

    const [populateArray, setPopulateArray] = useState([]);
    const [arrayIsPopulated, setArrayIsPopulated] = useState(false); 

    //POPULAR O ARRAY DE NOMES
    const getNames = () => {
        getArrays.getArrayNames(myCallback);
    }
    const myCallback = (data) => {
        // console.log([...data]);
        //setPopulateArray([...data]);
        setPopulateArray([...data].sort());
        console.log(Array.isArray(data));
        setArrayIsPopulated(true);
    }
    //FIM DE  POPULAR O ARRAY DE NOMES

    useEffect(() => {
        getNames();
    }, []); //[] 


    const getByName = () => {
        setDontGo('');
        setIsLoading(true);
        functions.getDataNameFromApi(selectedName, callback);
        displayWaitingText('Por favor aguarde...');
        console.log(dontGo.length);
        console.log(selectedName);
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        navigation.navigate('ResultsByName', { data: data, isLoading: isLoading });
        setIsLoading(false);
        displayWaitingText('');

    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <Container>
                   <View style={ImputStyles.imputContainerWithDropDown}>
                    {/*   <Picker
                        style={{ width: 200, height: 29, marginBottom: 100 }}
                        mode="dropdown"
                        selectedValue={selectedName} //é onde para o picker - tem de ficar no q a pessoa escolher
                        onValueChange={(itemValue, itemIndex) => setSelectedName(itemValue)}>
                        {names.map((element) => {
                            return (<Picker.Item label={element} value={element} key={element} />)
                        })}
                    </Picker> */}

                    <Picker
                        style={{ width: 200, height: 29, marginBottom: 100 }}
                        mode="dropdown"
                        selectedValue={selectedName} //é onde para o picker - tem de ficar no q a pessoa escolher
                        onValueChange={(itemValue, itemIndex) => setSelectedName(itemValue)}>
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
                            onPress={() => getByName()}
                        ><Text style={OkInputButtons.buttonLabel}>OK</Text>
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
    waitingText: {
        fontSize: 18,
    },
    waitingView: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default FindByName;