import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

const Input = props => {

    //mantem os estuilo definidos na prop styles.textInput
    //e acrescenta os q forem definidos AQUI,  SE indicados 
    //em cada elemento em particular atraves da referencia a esta const Input
    return <TextInput 
    style={{...styles.textInput, ...props.style }}/>


};

const styles = StyleSheet.create({

    textInput: {
        borderWidth: 1, 
        color: 'black',
        width: 225,
        borderRadius: 10, 
       
    },


});

export default Input;