//versao com modal, por aparentemente ser mais adequado a este caso:

import React from 'react';
import { View, Text, StyleSheet, Modal, Button, FlatList, TouchableOpacity } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
import GenericLabels from '../constants/GenericLabels';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';

const CompleteFlatList = (props) => {

    const navigation = useNavigation();
    const colors = ['#7FB3D5', '#E74C3C', '#F8C471', '#76D7C4', '#73C6B6', '#FAD7A0', '#BECCE4', '#DFC702', '#FFE8FB', '#F8C471', '#76D7C4', '#FAD7A0', '#EAFAF1', '#F1948A', '#A9DFBF', '#3498DB', '#F39C12', '#FDEDEC', '#ABEBC6', '#FCF3CF'];
    return (
        <Modal visible={props.visible} animationType="slide">


  <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors[Math.floor(Math.random() * 19) + 1],
                paddingBottom: 100,
                paddingTop: 50
            }}>           

                <View >
                   {props.availablePlease ?
                        <View style={Outputs.borderTransp}>
                            <Text style={Outputs.completeListWaitText}>Por favor aguarde...</Text>
                        </View>
                        :
                        <View style={Outputs.completeOutput}>
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={props.myDataAvailablePlease}
                                renderItem={item => (
                                    <View style={styles.internalOutput}>
                                        <Text style={Outputs.outputText}>
                                            {/* ID: {item.item['_id']} {"\n"} */}
                                            Nome: {item.item['Vinho ou Marca']}{"\n"}
                                            Produtor: {item.item['Produtor']}{"\n"}
                                            Qualidade: {item.item['Qualidade']} {"\n"}
                                        </Text>
                                        <Separator />
                                    </View>
                                )}>
                            </FlatList>
                        </View>

                    }

                </View>

                <View style={GenericStyleButtons.backButton}>
                    <View style={GenericStyleButtons.firstButton}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={props.onCancel}>
                            <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={GenericStyleButtons.secondButton}>
                        <TouchableOpacity
                            style={MenuGoForwardButtons.forwardTouchable}
                            // onPress={() => {}}>
                            onPress={() => { navigation.navigate('Home') }}>
                            <Text style={MenuGoForwardButtons.buttonLabel}>Início</Text>
                        </TouchableOpacity>
                    </View>
                </View>

           </View>
        </Modal>
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
export default CompleteFlatList;




/*
COISAS RETIRADAS DO CODIGO MAS Q N QUERO APAGAR:

  <Button title="teste"
                     onPress={() => alert(JSON.stringify(props.myDataAvailablePlease))} />
                    onPress={()=>  alert(Array.isArray(props.myDataAvailablePlease))}




                           <Spinner
                                   visible={props.visible}
                                   textContent={'Por favor aguarde...'}
                                   textStyle={styles.spinnerTextStyle}
                               />

*/












/*----------------------------------------------------------------------------------------------
COISAS RETIRADAS DO CODIGO MAS Q N QUERO APAGAR:

  <Button title="teste"
                     onPress={() => alert(JSON.stringify(props.myDataAvailablePlease))} />
                    onPress={()=>  alert(Array.isArray(props.myDataAvailablePlease))}




                           <Spinner
                                   visible={props.visible}
                                   textContent={'Por favor aguarde...'}
                                   textStyle={styles.spinnerTextStyle}
                               />

*/
