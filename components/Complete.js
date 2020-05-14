//versao com modal, por aparentemente ser mais adequado a este caso:
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ClickableSquare from './ClickableSquare';
import CompleteFlatList from './CompleteFlatList';
import MenuSquaresLabels from '../constants/MenuSquaresLabels';
import OkButtonsInsideSquares from '../constants/OkButtonsInsideSquares';
import functions from "../functions/functions.js";

const Complete = () => {
    const [isClickMode, setIsClickMode] = useState(false);
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cancelSearch = () => {
        setIsClickMode(false); //closes the modal
    };

    const getComplete = () => {
        setIsClickMode(true);
        setIsLoading(true);
        functions.getCompleteDataFromApi(callback);
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        setIsLoading(false);
    }

    return (
        <View>
            <ClickableSquare style={styles.square}>
                <Text style={MenuSquaresLabels.text}>Todos</Text>
                <View style={styles.button}>

                    <TouchableOpacity
                        style={OkButtonsInsideSquares.okButton}
                        onPress={() => getComplete()}>
                        <Text style={OkButtonsInsideSquares.buttonLabel}>OK</Text>
                    </TouchableOpacity>

                </View>
            </ClickableSquare>

            <CompleteFlatList
                visible={isClickMode}
                onCancel={cancelSearch}
                myDataAvailablePlease={returnedData}
                availablePlease={isLoading}
            />
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
export default Complete;